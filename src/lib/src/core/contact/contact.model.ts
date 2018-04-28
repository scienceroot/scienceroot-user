
export class ScrUserContact {

  public static fromObject(obj: any = {}): ScrUserContact {
    return new ScrUserContact(
      obj.skype,
      obj.phone,
      obj.twitter
    );
  }

  constructor(
    private _skype?: string,
    private _phone?: string,
    private _twitter?: string
  ) {
  }

  public toRequest(): any {
    return {
      skype: this._skype,
      phone: this._phone,
      twitter: this._twitter
    };
  }

  get skype(): string {
    return this._skype;
  }

  set skype(value: string) {
    this._skype = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get twitter(): string {
    return this._twitter;
  }

  set twitter(value: string) {
    this._twitter = value;
  }
}
