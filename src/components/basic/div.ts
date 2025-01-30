import type { Icon } from "../../common/icon";
import { CommonText } from "../../common/text";

export class DivText extends CommonText {
  lines?: number; // 内容最大显示行数，超出设置行的内容用... 省略。

  setLines(lines: number) {
    this.lines = lines;
    return this;
  }
}

export class DivComponent {
  tag: "div";
  text: DivText;
  icon?: Icon;

  constructor(text: DivText) {
    this.tag = "div";
    this.text = text;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }
}
