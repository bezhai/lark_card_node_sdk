import type { CardHeader } from "./title";
import { Config } from "./config";
import { CardElement } from "../components/basic/element";
import { BaseClass } from "../common/json";

class Body extends BaseClass {
  private elements: CardElement[];
  constructor() {
    super();
    this.elements = [];
  }

  addElements(...elements: CardElement[]): this {
    this.elements.push(...elements);
    return this;
  }
}

export class LarkCard extends BaseClass {
  private readonly schema: "2.0" = "2.0";
  config?: Config;
  header?: CardHeader;
  body: Body = new Body();


  withConfig(config: Config): this {
    this.config = config;
    return this;
  }

  withHeader(header: CardHeader): this {
    this.header = header;
    return this;
  }

  addElements(...elements: CardElement[]): this {
    this.body.addElements(...elements);
    return this;
  }
}
