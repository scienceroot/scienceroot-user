import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ScrUser} from "../../core/user.model";
import {ScrDocument, ScrDocumentService} from "./document.model";

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div class="mat-headline jobs--headline">
        <mat-icon>
          description
        </mat-icon>
        <span>
          Documents
        </span>
      </div>
      <div class="">
        <div  *ngFor="let document of documents | async"
              class="document">
          <div class="mat-headline scr-primary-text">
            {{ document.title }}
          </div>
          <div class="document-info">
            <span>
              Created
            </span>
            <span>
              {{ document.createdAt | date:'shortDate' }}
            </span>
            <span>
              by
            </span>
            <span *ngFor="let author of document.authors">
              {{ author.lastname }}
            </span>
          </div>
          <div  fxLayout="row"
                fxLayoutAlign="start center">
            <div fxFlex="100px">
              <span>Keywords</span>
            </div>
            <div fxFlex="">
              <mat-chip-list>
                <mat-chip *ngFor="let keyword of document.keywords"
                          color="primary"
                          selected="true">
                  {{ keyword }}
                </mat-chip>
              </mat-chip-list>
            </div>
          </div>
        </div>
      </div>
    </scr-user-profile>
  `,
  styles: [`
    .document {
      padding: 12px 0;
    }
    
    .document .document-info {
      margin: 8px 0;
    }
  `]
})
export class ScrUserDetailsDocumentsComponent {

  public user: ScrUser;
  public documents: Promise<ScrDocument[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: ScrDocumentService
  ) {
    this.user = this.activatedRoute.snapshot.data.user;
    this.documents = this.documentService.byUserId('abcdefg');
  }
}


