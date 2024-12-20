import { FormElement } from "./element";

export class FormComponent {
  tag: "form" = "form";
  name: string; // 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。
  elements: FormElement[];


  constructor(name: string, elements: FormElement[]) {
    this.name = name;
    this.elements = elements;
  }

  appendElement(element: FormElement) {
    this.elements.push(element);
  }
}