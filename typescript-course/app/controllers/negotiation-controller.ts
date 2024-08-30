import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { messageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { daysOfTheWeek } from "../enums/days-of-the-week.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new messageView("#messageview");

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negotiationsView.update(this.negotiations);
  }
  public sum(): void {
    const negotiation = Negotiation.createThe(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    );
    if (!this.isBusinessDay(negotiation.date)) {
      this.messageView.update("Only on business day negotiations are accepted");
      return;
    }

    this.negotiations.sum(negotiation);
    this.clearForm();
    this.updateView();
  }

  private isBusinessDay(date: Date) {
    return (
      date.getDay() > daysOfTheWeek.SUNDAY &&
      date.getDay() < daysOfTheWeek.SATURDAY
    );
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
