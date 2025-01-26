import type { CardElement } from "./components/basic/element";
import type { CardHeader } from "./components/basic/title";

export class LarkCard {
  header?: CardHeader;
  elements: CardElement[];

  constructor(header?: CardHeader) {
    this.header = header;
    this.elements = [];
  }

  addElements(...elements: CardElement[]): LarkCard {
    this.elements.push(...elements);
    return this;
  }
}
