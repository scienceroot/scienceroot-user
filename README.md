# @scienceroot/user
This repository contains all user related components for @scienceroot.

## Install

```bash
npm install @scienceroot/user

# or

yarn add @scienceroot/user
```

## Usage

See the complete demo sources in `src/demo/app`.

```typescript
@NgModule({
  imports:      [
    RouterModule.forRoot([]),
    ScrUserRoutesModule
  ],
  declarations: [ AppComponent ],
})
export class AppModule {

}
```


### Routes

The import of ScrUserCoreModule adds all rouser related routing to the importing app.

- `/user/new` (alias `register`) - Form for registering as a new user.

