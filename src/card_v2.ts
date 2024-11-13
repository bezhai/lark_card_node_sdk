import { CardElement } from "./element";
import { CardHeader } from "./title";

export class LarkV2Card {
  schema: "2.0";
  header: CardHeader;
  elements: CardElement[];

  constructor(header: CardHeader) {
    this.schema = "2.0";
    this.header = header;
    this.elements = [];
  }

  addElements(...elements: CardElement[]): LarkV2Card {
    this.elements.push(...elements);
    return this;
  }
}
