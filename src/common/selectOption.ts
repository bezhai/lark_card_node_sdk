import { Icon } from "./icon";
import { PlainText } from "./text";

/**
 * 选项配置
 */
export class SelectOption {
  text: PlainText;
  value: string;
  icon?: Icon;

  /**
   * @param label 选项文本内容
   * @param value 选项值
   */
  constructor(label: string, value: string) {
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