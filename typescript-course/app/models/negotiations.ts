import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  public sum(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }
  public listNegotiations(): readonly Negotiation[] {
    return this.negotiations;
  }
}
