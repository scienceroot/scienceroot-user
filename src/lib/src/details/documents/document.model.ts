import {ScrUser} from "../../core/user.model";
import {SCR_USER_MOCK} from "../../core/user.service";
import {Injectable} from "@angular/core";

export class ScrDocument {

  constructor(
    public title: string,
    public createdAt: Date,
    public keywords: string[],
    public authors: ScrUser[]
  ) {

  }

}

const SCR_DOCUMENT_MOCK: ScrDocument[] = [
  new ScrDocument(
    'Ecological meltdown in predator-free forest fragments',
    new Date(),
    ['Forest', 'Nature', 'Trees', 'Animals'],
    [SCR_USER_MOCK]
  ),
  new ScrDocument(
    'The spectre at the feast: Capitalist crisis and the politics of recession',
    new Date(),
    ['Economics', 'Recession', 'Money'],
    [SCR_USER_MOCK]
  )
];

@Injectable()
export class ScrDocumentService {

  public byUserId(userId: string): Promise<ScrDocument[]> {
    return Promise.resolve(SCR_DOCUMENT_MOCK);
  }
}
