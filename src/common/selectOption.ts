import { Icon } from "./icon";
import { PlainText } from "./text";
import { BaseClass } from "./json";

/**
 * 选项配置
 */
export class SelectOption extends BaseClass {
  private text: PlainText;
  private value: string;
  private icon?: Icon;

  /**
   * @param label 选项文本内容
   * @param value 选项值
   */
  constructor(label: string, value: string) {
    super();
    this.text = new PlainText(label);
    this.value = value;
  }

  /**
   * 设置选项图标
   * @param icon 选项图标
   */
  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }
}