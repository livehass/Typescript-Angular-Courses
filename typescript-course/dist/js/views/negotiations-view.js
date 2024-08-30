import { View } from "./view.js";
export class NegotiationsView extends View {
    template(model) {
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
                                <td>${this.formatDate(negotiation.date)}</td>
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
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
