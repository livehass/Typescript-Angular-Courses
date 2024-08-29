import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  sum(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }
  listNegotiations(): readonly Negotiation[] {
    return this.negotiations;
  }
}
