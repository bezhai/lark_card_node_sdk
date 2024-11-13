import { CardElement } from "./element";
import { CardHeader } from "./title";

export class LarkCard {
  header: CardHeader;
  elements: CardElement[];

  constructor(header: CardHeader) {
    this.header = header;
    this.elements = [];
  }

  addElements(...elements: CardElement[]): LarkCard {
    this.elements.push(...elements);
    return this;
  }
}
