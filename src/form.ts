import type { FormElement } from "./element";

export class FormComponent {
  tag: "form" = "form";
  name: string; // 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。
  elements: FormElement[] = [];


  constructor(name: string) {
    this.name = name;
  }

  appendElements(...elements: FormElement[]) {
    this.elements.push(...elements);
    return this;
  }
}