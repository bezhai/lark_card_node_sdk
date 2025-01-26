import type { WidthType } from "../../common/style";
import { PlainText } from "../../common/text";
import { SelectOption } from "../../common/selectOption";

export class MultiSelectComponent {
  tag: "multi_select_static" = "multi_select_static";
  type?: "default" | "text" = "default";
  name?: string;
  required?: boolean = false;
  disabled?: boolean = false;
  selected_values?: string[];
  placeholder?: PlainText;
  width?: WidthType = "default";
  options?: SelectOption[];

  /**
   * @param name 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。
   */
  constructor(name?: string) {
    this.name = name;
  }

  /**
   * 设置选择器样式
   * @param type default: 带边框样式, text: 不带边框的纯文本样式
   */
  setType(type: "default" | "text") {
    this.type = type;
    return this;
  }

  /**
   * 设置是否必填
   * @param required true: 单选组件必填, false: 单选组件非必填
   */
  setRequired(required: boolean) {
    this.required = required;
    return this;
  }

  /**
   * 设置是否禁用
   * @param disabled true: 禁用单选组件, false: 启用单选组件
   */
  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  /**
   * 设置下拉选择件的初始选项内容
   * @param selected_values 初始选项内容
   */
  setSelectedValues(selected_values: string[]) {
    this.selected_values = selected_values;
    return this;
  }

  /**
   * 设置占位文本
   * @param placeholder 下拉选择件的占位文本
   */
  setPlaceholder(placeholder: PlainText) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * 设置选择器宽度
   * @param width default: 默认宽度, fill: 充满容器宽度, [100,px]: 固定宽度
   */
  setWidth(width: WidthType) {
    this.width = width;
    return this;
  }

  /**
   * 设置选项列表
   * @param options 选项配置数组，包含文本、值、图标等信息
   */
  setOptions(options: SelectOption[]) {
    this.options = options;
    return this;
  }
}
