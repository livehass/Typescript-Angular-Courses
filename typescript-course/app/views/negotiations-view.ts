import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {
  template(model: Negotiations): string {
    return `
            <table class="table table-hover table-bordered">
                <thread>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>VALUE</th>
                    </tr>
                    <tbody>
                        ${model
                          .listNegotiations()
                          .map((negotiation) => {
                            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(
                                  negotiation.date
                                )}</td>
                                <td>${negotiation.amount}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                            
                            `;
                          })
                          .join("")}
                    </tbody>
                </thread >
            </table>
        
        
        `;
  }
}
