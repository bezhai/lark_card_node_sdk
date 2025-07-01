import type { CardHeader } from '@card/title';
import { Config } from '@card/config';
import { CardElement } from '@basic/element';
import { BaseClass } from '@common/json';
import { CardLink } from '@card/link';
import { Direction, HorizontalAlign, PxValue, Spacing, VerticalAlign } from '@common/style';
import { BaseElementContainer } from '@basic/baseElementContainer';

/**
 * 卡片主体
 */
class Body extends BaseElementContainer<CardElement> {
  private direction: Direction = 'vertical';
  private vertical_spacing?: Spacing;
  private horizontal_spacing?: Spacing;
  private vertical_align?: VerticalAlign;
  private horizontal_align?: HorizontalAlign;
  private padding?: PxValue;
  constructor() {
    super();
  }

  setDirection(direction: Direction) {
    this.direction = direction;
    return this;
  }

  setVerticalSpacing(spacing: Spacing) {
    this.vertical_spacing = spacing;
    return this;
  }

  setHorizontalSpacing(spacing: Spacing) {
    this.horizontal_spacing = spacing;
    return this;
  }

  setVerticalAlign(align: VerticalAlign) {
    this.vertical_align = align;
    return this;
  }

  setHorizontalAlign(align: HorizontalAlign) {
    this.horizontal_align = align;
    return this;
  }

  setPadding(padding: PxValue) {
    this.padding = padding;
    return this;
  }
}

export class LarkCard extends BaseClass {
  private readonly schema: '2.0' = '2.0';
  private config?: Config;
  private card_link?: CardLink;
  private header?: CardHeader;
  private body: Body = new Body();

  withConfig(config: Config): this {
    this.config = config;
    return this;
  }

  withHeader(header: CardHeader): this {
    this.header = header;
    return this;
  }

  withCardLink(card_link: CardLink): this {
    this.card_link = card_link;
    return this;
  }

  getConfig(): Config | undefined {
    return this.config;
  }

  getHeader(): CardHeader | undefined {
    return this.header;
  }

  // 获取 body 实例
  getBody(): Body {
    return this.body;
  }

  // 代理一些常用的 Body 方法
  addElement(...elements: CardElement[]): this {
    this.body.pushElement(...elements);
    return this;
  }

  removeElement(index: number): CardElement | undefined {
    return this.body.removeElement(index);
  }

  getElements(): CardElement[] {
    return this.body.getAllElements();
  }

  clearElements(): this {
    this.body.clearElements();
    return this;
  }

  toV1(): LarkCardV1 {
    const v1 = new LarkCardV1();
    if (this.config) {
      v1.withConfig(this.config);
    }
    if (this.header) {
      v1.withHeader(this.header);
    }
    v1.addElement(...this.getElements());
    return v1;
  }
}

/**
 * 旧版本卡片, 仅作为兼容性支持, 组装V2卡片后可以调用 toV1 方法转换为V1卡片
 */
class LarkCardV1 extends BaseClass {
  private readonly schema: '1.0' = '1.0';
  private config?: Config;
  private header?: CardHeader;
  private elements: CardElement[] = [];

  withConfig(config: Config): this {
    this.config = config;
    return this;
  }

  withHeader(header: CardHeader): this {
    this.header = header;
    return this;
  }

  addElement(...elements: CardElement[]): this {
    this.elements.push(...elements);
    return this;
  }

  getElements(): CardElement[] {
    return this.elements;
  }
}

export type ValidLarkCard = LarkCard | LarkCardV1;
