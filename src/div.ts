/**
 * {
  "tag": "div",
  "text": {  // 配置普通文本信息。
    "tag": "plain_text", // 文本类型的标签。
    "content": "", // 文本内容。当 tag 为 lark_md 时，支持部分 Markdown 语法的文本内容。
    "text_size": "normal", // 文本大小。默认值 normal。
    "text_color": "default", // 文本颜色。仅在 tag 为 plain_text 时生效。默认值 default。
    "text_align": "left", // 文本对齐方式。默认值 left。
    "lines": 2, // 内容最大显示行数，超出设置行的内容用 ... 省略。
  },
  "icon": {
    // 前缀图标。
    "tag": "standard_icon", // 图标类型。
    "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
    "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
    "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
  }
}
  文本大小。可取值如下所示。如果你填写了其它值，卡片将展示为 normal 字段对应的字号。你也可分别为移动端和桌面端定义不同的字号，详细步骤参考下文 为移动端和桌面端定义不同的字号。

heading-0：特大标题（30px）
heading-1：一级标题（24px）
heading-2：二级标题（20 px）
heading-3：三级标题（18px）
heading-4：四级标题（16px）
heading：标题（16px）
normal：正文（14px）
notation：辅助信息（12px）
xxxx-large：30px
xxx-large：24px
xx-large：20px
x-large：18px
large：16px
medium：14px
small：12px
x-small：10px
 */

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
