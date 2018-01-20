export class ScrAddress {

  constructor(
    public street: string,
    public zip: string,
    public city: string,
    public country: string
  ) {

  }

  public toString(): string {
    return `${this.city}, ${this.country}`;
  }
}
