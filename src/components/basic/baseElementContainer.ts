import { BaseComponent } from './basic';

export abstract class BaseElementContainer<T extends BaseComponent> extends BaseComponent {
  protected elements: T[] = [];

  findElement(predicate: (element: T) => boolean): T | undefined {
    return this.elements.find(predicate);
  }

  pushElement(...elements: T[]): this {
    this.elements.push(...elements);
    return this;
  }

  unshiftElement(...elements: T[]): this {
    this.elements.unshift(...elements);
    return this;
  }

  insertElement(index: number, ...elements: T[]): this {
    if (index >= 0 && index <= this.elements.length) {
      this.spliceElements(index, 0, ...elements);
    }
    return this;
  }

  removeElement(index: number): T | undefined {
    if (index >= 0 && index < this.elements.length) {
      return this.elements.splice(index, 1)[0];
    }
    return undefined;
  }

  removeRangeElements(start: number, end: number): this {
    if (start >= 0 && end <= this.elements.length && start <= end) {
      this.elements.splice(start, end - start);
    }
    return this;
  }

  elementCount(): number {
    return this.elements.length;
  }

  getElement(index: number): T | undefined {
    return this.elements[index];
  }

  getAllElements(): T[] {
    return [...this.elements];
  }

  clearElements(): this {
    this.elements = [];
    return this;
  }

  spliceElements(start: number, deleteCount?: number, ...items: T[]): T[] {
    if (start < 0) {
      start = Math.max(0, this.elements.length + start);
    }

    if (deleteCount === undefined) {
      deleteCount = this.elements.length - start;
    }

    return this.elements.splice(start, deleteCount, ...items);
  }
}
