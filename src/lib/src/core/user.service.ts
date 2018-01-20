import {Injectable} from "@angular/core";
import {SCR_USER_TYPES, ScrUser} from "./user.model";
import {ScrUserJob} from "./job.model";
import {ScrAddress} from "./address.model";

const SCR_USER_MOCK: ScrUser = new ScrUser(
  'abcdefg',
  'John',
  'Doe',
  new ScrAddress(
    'Sample Street 123',
    '99999',
    'New York',
    'USA'
  ),
  'JDoe',
  'john.doe@demo.com',
  null,
  SCR_USER_TYPES[0],
  [
    new ScrUserJob(
      'NASA',
      {
        displayName: 'Lead Space Explorer'
      },
      {
        displayName: 'Aerospace'
      }
    ),
    new ScrUserJob(
      'SpaceX',
      {
        displayName: 'Astronaut'
      },
      {
        displayName: 'Aerospace'
      }
    ),
    new ScrUserJob(
      'Virgin Galactic',
      {
        displayName: 'Spacecraft Engineer'
      },
      {
        displayName: 'Aerospace'
      }
    )
  ]
);

@Injectable()
export class ScrUserService {

    constructor() {
    }

    public byUserId(userId: string): Promise<ScrUser> {
      return Promise.resolve(SCR_USER_MOCK);
    }
}
