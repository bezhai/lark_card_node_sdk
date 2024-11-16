import { CardHeader } from "../title";
import { Config } from "./config";
import { CardElementV2 } from "./element";

class Body {
  elements: CardElementV2[];
  elementIdMap: Map<string, CardElementV2>;
  constructor() {
    this.elements = [];
    this.elementIdMap = new Map();
  }

  addElements(...elements: CardElementV2[]): this {
    this.elements.push(...elements);
    for (const element of elements) {
      if (element.element_id) {
        // 检查是否已经存在相同的 element_id
        if (this.elementIdMap.has(element.element_id)) {
          throw new Error(`Duplicate element_id: ${element.element_id}`);
        }
        this.elementIdMap.set(element.element_id, element);
      } else {
        throw new Error("Element must have an element_id");
      }
    }
    return this;
  }
  toJSON(): any {
    return {
      elements: this.elements,
    };
  }
}

export class LarkV2Card {
  schema: "2.0";
  config?: Config;
  header?: CardHeader;
  body: Body;

  constructor() {
    this.schema = "2.0";
    this.body = new Body();
  }

  withConfig(config: Config): this {
    this.config = config;
    return this;
  }

  withHeader(header: CardHeader): this {
    this.header = header;
    return this;
  }

  addElements(...elements: CardElementV2[]): this {
    this.body.addElements(...elements);
    return this;
  }
}
