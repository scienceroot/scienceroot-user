import {ScrUserJob} from "./job.model";
import {ScrAddress} from "./address.model";

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

  constructor(
    public id: string,
    public forename?: string,
    public lastname?: string,
    public address?: ScrAddress,
    public username?: string,
    public email?: string,
    public password?: string,
    public type?: ScrUserType,
    public jobs?: ScrUserJob[]
  ) {
  }
}

export interface ScrUserType {
  name: string;
  displayName: string;
  description: string;
  icon: string;
}
