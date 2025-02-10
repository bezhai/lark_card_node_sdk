import { BaseElementContainer } from "../basic/baseElementContainer";
import { BaseComponent, ValidIdentifier } from "../basic/basic";
import type { FormElement } from "../basic/element";

export class FormComponent extends BaseElementContainer<FormElement> {
  tag: "form" = "form";
  name: string; // 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。


  constructor(element_id: ValidIdentifier, name: string) {
    super(element_id);
    this.name = name;
  }
}
