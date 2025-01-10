import { TitleColor } from "./common/color";
import { Icon } from "./common/icon";
import { TextSize } from "./common/text";

class Text {
  tag: "plain_text" | "lark_md" = "plain_text"; // 文本类型的标签
  content: string; // 文本内容。当 tag 为 lark_md 时，支持部分 Markdown 语法的文本内容。
  text_size: TextSize = "normal"; // 文本大小。默认值 normal
  text_color: TitleColor = "default"; // 文本颜色。仅在 tag 为 plain_text 时生效。默认值 default
  text_align: "left" | "center" | "right" = "left"; // 文本对齐方式。默认值 left
  lines?: number; // 内容最大显示行数，超出设置行的内容用... 省略。

  constructor(content: string) {
    this.content = content;
  }

  setTextSize(text_size: TextSize) {
    this.text_size = text_size;
    return this;
  }

  setTextColor(text_color: TitleColor) {
    this.text_color = text_color;
    return this;
  }

  setTextAlign(text_align: "left" | "center" | "right") {
    this.text_align = text_align;
    return this;
  }

  setLines(lines: number) {
    this.lines = lines;
    return this;
  }
}

export class DivComponent {
  tag: "div";
  text: Text;
  icon?: Icon;

  constructor(text: Text) {
    this.tag = "div";
    this.text = text;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }
}
