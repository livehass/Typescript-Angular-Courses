import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { messageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new messageView("#messageview");
  private readonly SATURDAY: number = 6;
  private readonly SUNDAY: number = 0;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negotiationsView.update(this.negotiations);
  }
  public sum(): void {
    const negotiation = this.createNewNegotiation();

    if (
      negotiation.date.getDay() > this.SUNDAY &&
      negotiation.date.getDay() < this.SATURDAY
    ) {
      this.negotiations.sum(negotiation);
      this.clearForm();
      this.updateView();
    } else {
      this.messageView.update("Only on business day negotiations are accepted");
    }
  }
  private createNewNegotiation(): Negotiation {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);

    return new Negotiation(date, amount, value);
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negotiation successfully added");
  }
}
