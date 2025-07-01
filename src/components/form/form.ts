import { BaseElementContainer } from '@basic/baseElementContainer';
import type { FormElement } from '@basic/element';

export class FormComponent extends BaseElementContainer<FormElement> {
  private readonly tag: 'form' = 'form';
  private name: string; // 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。

  constructor(name: string) {
    super();
    this.name = name;
  }
}
