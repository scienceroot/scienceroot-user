import {ScrUserContact} from './contact/contact.model';
import {ScrUserJob} from "./job/job.model";
import {ScrAddress} from "./address.model";
import {ScrUserFieldOfInterest} from "./interest/interest.model";
import {ScrUserLanguage} from "./language/language.model";

export const SCR_USER_TYPES: ScrUserType[] = [
  {
    name: 'journal',
    displayName: 'Ecosystem Account',
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

  public static fromObjArr(objArr: any[] = []): ScrUser[] {
    return objArr.map(ScrUser.fromObj);
  }

  public static fromObj(obj: any): ScrUser {
    const jobs = !!obj.jobs ? ScrUserJob.fromObjArr(obj.jobs) : [];
    const contact = !!obj.contact ? ScrUserContact.fromObject(obj.contact) : new ScrUserContact();

    return new ScrUser(
      obj.mail,
      obj.password,
      obj.uid,
      obj.forename,
      obj.lastname,
      obj.address,
      contact,
      obj.roles,
      jobs,
      obj.interests,
      obj.languages,
      obj.publicKey
    );
  }

  constructor(
    public mail?: string,
    public password?: string,
    public uid?: string,
    public forename?: string,
    public lastname?: string,
    public address?: ScrAddress,
    public contact?: ScrUserContact,
    public roles?: string[],
    public jobs?: ScrUserJob[],
    public interests?: ScrUserFieldOfInterest[],
    public languages?: ScrUserLanguage[],
    public publicAddress?: string
  ) {
  }

  public isValid(): boolean {
    return !!this.forename && !!this.lastname && !!this.mail;
  }
}

export interface ScrUserType {
  name: string;
  displayName: string;
  description: string;
  icon: string;
}
