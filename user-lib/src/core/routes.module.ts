import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ScrActiveUserResolver} from '../active/active-user.resolver';
import {ScrActiveUserModule} from '../active/active.module';
import {ScrUserDetailsFollowedByComponent} from '../details/followedBy/followedBy.component';
import {ScrUserDetailsFollowsComponent} from '../details/follows/follows.component';
import {ScrUserDetailsNewsfeedComponent} from '../details/newsfeed/newsfeed.component';
import {ScrUserDetailsNewsfeedModule} from '../details/newsfeed/newsfeed.module';
import {ScrUserNewComponent} from '../new/new.component';
import {ScrUserCoreModule} from './core.module';
import {ScrTermsAndConditionsComponent} from '../terms/terms.component';
import {ScrTermsAndConditionsModule} from '../terms/terms.module';
import {ScrUserResolver} from './user.resolver';
import {ScrUserDetailsInfoComponent} from '../details/info/info.component';
import {ScrUserDetailsModule} from '../details/details.module';
import {ScrAuthenticationGuard, ScrAuthenticationLoginComponent, ScrAuthenticationModule} from '@scienceroot/security';
import {ScrUserEditComponent} from '../edit/edit.component';
import {ScrUserEditModule} from '../edit/edit.module';
import {ScrUserWalletComponent} from '../details/wallet/wallet.component';

const USER_ROUTES: Route[] = [
  {
    path: 'register',
    redirectTo: 'user/new'
  },
  { path: 'login',
    component: ScrAuthenticationLoginComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'new',
        component: ScrUserNewComponent
      },
      {
        path: 'terms',
        component: ScrTermsAndConditionsComponent
      },
      {
        path: 'me',
        canActivate: [ScrAuthenticationGuard],
        resolve: {
          user: ScrActiveUserResolver
        },
        component: ScrUserDetailsInfoComponent
      },
      {
        path: ':userId',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'info'
          },
          {
            path: 'info',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserDetailsInfoComponent
          },
          {
            path: 'followers',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserDetailsFollowedByComponent
          },
          {
            path: 'followedBy',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserDetailsFollowsComponent
          },
          {
            path: 'newsfeed',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserDetailsNewsfeedComponent
          },
          {
            path: 'wallet',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserWalletComponent
          },
          {
            path: 'edit',
            canActivate: [ScrAuthenticationGuard],
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    ScrAuthenticationModule,
    ScrUserCoreModule,
    ScrActiveUserModule,
    ScrUserDetailsModule,
    ScrUserEditModule,
    ScrUserDetailsNewsfeedModule,
    ScrTermsAndConditionsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    ScrUserResolver
  ]
})
export class ScrUserRoutesModule {

}
