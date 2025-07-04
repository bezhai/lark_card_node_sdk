import type { WidthType } from '@common/style';
import type { PlainText } from '@common/text';
import { BaseComponent } from '@basic/basic';

type InputType =
  | 'text' // 普通文本
  | 'multiline_text' // 多行文本
  | 'password'; // 密码

export class InputComponent extends BaseComponent {
  private readonly tag: 'input' = 'input';
  private name?: string; // 表单容器的唯一标识。用于识别用户在交互后，提交的是哪个表单容器的数据。
  private placeholder?: PlainText; // 占位符，无输入时展示
  private max_length?: number; // 最大输入长度
  private default_value?: string; // 输入框的默认内容
  private width?: WidthType; // 输入框的宽度
  private input_type?: InputType; // 输入框的类型
  private show_icon?: boolean; // 当输入类型为密码类型时，是否展示前缀图标
  private rows?: number; // 多行文本的行数
  private auto_resize?: boolean; // 多行文本是否自动撑高
  private max_rows?: number; // 多行文本最大行数
  private label?: PlainText; // 标签内容
  private label_position?: 'top' | 'left'; // 标签位置，默认 top
  private required?: boolean; // 是否必填，默认值为 false
  private disabled?: boolean; // 是否禁用，默认值为 false
  private value?: string | Record<string, unknown>; // 输入框携带的业务信息

  setPlaceholder(placeholder: PlainText) {
    this.placeholder = placeholder;
    return this;
  }

  setMaxLength(max_length: number) {
    this.max_length = max_length;
    return this;
  }

  setDefaultValue(default_value: string) {
    this.default_value = default_value;
    return this;
  }

  setWidth(width: WidthType) {
    this.width = width;
    return this;
  }

  setInputType(input_type: InputType) {
    this.input_type = input_type;
    return this;
  }

  setShowIcon(show_icon: boolean) {
    this.show_icon = show_icon;
    return this;
  }

  setRows(rows: number) {
    this.rows = rows;
    return this;
  }

  setAutoResize(auto_resize: boolean) {
    this.auto_resize = auto_resize;
    return this;
  }

  setMaxRows(max_rows: number) {
    this.max_rows = max_rows;
    return this;
  }

  setLabel(label: PlainText) {
    this.label = label;
    return this;
  }

  setLabelPosition(label_position: 'top' | 'left') {
    this.label_position = label_position;
    return this;
  }

  setRequired(required: boolean) {
    this.required = required;
    return this;
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  setValue(value: string | Record<string, unknown>) {
    this.value = value;
    return this;
  }
}
