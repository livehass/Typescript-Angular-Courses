import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDate = document.querySelector("#data");
        this.inputAmount = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    sum() {
        const negotiation = this.createNewNegotiation();
        this.negotiations.sum(negotiation);
        console.log(this.negotiations.listNegotiations());
        this.clearForm();
    }
    createNewNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
}
