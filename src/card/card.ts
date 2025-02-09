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

  // 在末尾添加元素
  push(...elements: CardElement[]): this {
    this.elements.push(...elements);
    return this;
  }

  // 在开头添加元素
  unshift(...elements: CardElement[]): this {
    this.elements.unshift(...elements);
    return this;
  }

  // 在指定位置插入元素
  insert(index: number, ...elements: CardElement[]): this {
    if (index >= 0 && index <= this.elements.length) {
      this.splice(index, 0, ...elements);
    }
    return this;
  }

  // 删除指定位置的元素并返回被删除的元素
  remove(index: number): CardElement | undefined {
    if (index >= 0 && index < this.elements.length) {
      return this.elements.splice(index, 1)[0];
    }
    return undefined;
  }

  // 删除指定范围的元素
  removeRange(start: number, end: number): this {
    if (start >= 0 && end <= this.elements.length && start <= end) {
      this.elements.splice(start, end - start);
    }
    return this;
  }

  // 获取元素数量
  size(): number {
    return this.elements.length;
  }

  // 获取指定位置的元素
  get(index: number): CardElement | undefined {
    return this.elements[index];
  }

  // 获取所有元素的副本
  getAll(): CardElement[] {
    return [...this.elements];
  }

  // 清空所有元素
  clear(): this {
    this.elements = [];
    return this;
  }

  // 删除或插入元素，返回被删除的元素
  splice(start: number, deleteCount?: number, ...items: CardElement[]): CardElement[] {
    if (start < 0) {
      start = Math.max(0, this.elements.length + start);
    }
    
    if (deleteCount === undefined) {
      deleteCount = this.elements.length - start;
    }
    
    return this.elements.splice(start, deleteCount, ...items);
  }
}

export class LarkCard extends BaseClass {
  private readonly schema: "2.0" = "2.0";
  private config?: Config;
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
    this.body.push(...elements);
    return this;
  }

  removeElement(index: number): CardElement | undefined {
    return this.body.remove(index);
  }

  getElements(): CardElement[] {
    return this.body.getAll();
  }

  clearElements(): this {
    this.body.clear();
    return this;
  }
}
