import {ScrUserJob} from "./job.model";
import {ScrAddress} from "./address.model";
import {ScrUserFieldOfInterest} from "./interest.model";

export const SCR_USER_TYPES: ScrUserType[] = [
  {
    name: 'journal',
    displayName: 'Journal Account',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    icon: 'search'
  },
  {
    name: 'investor',
    displayName: 'Investor Account',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    icon: 'credit_card'
  }
];

export class ScrUser {

  public static fromObj(obj: any): ScrUser {
    return new ScrUser(
      obj.username,
      obj.mail,
      obj.password,
      obj.uid,
      obj.forename,
      obj.lastname,
      obj.address,
      obj.type,
      obj.jobs,
      obj.interests
    );
  }

  constructor(
    public username?: string,
    public mail?: string,
    public password?: string,
    public uid?: string,
    public forename?: string,
    public lastname?: string,
    public address?: ScrAddress,
    public type?: ScrUserType,
    public jobs?: ScrUserJob[],
    public interests?: ScrUserFieldOfInterest[]
  ) {
  }

  public isValid(): boolean {
    return !!this.forename && !!this.lastname && !!this.username && !!this.mail;
  }
}

export interface ScrUserType {
  name: string;
  displayName: string;
  description: string;
  icon: string;
}
