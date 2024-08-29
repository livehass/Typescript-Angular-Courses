export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    sum(negotiation) {
        this.negotiations.push(negotiation);
    }
    listNegotiations() {
        return this.negotiations;
    }
}
