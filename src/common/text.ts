import { TitleColor } from "./color";
import { BaseClass } from "./json";

/**
 * @class Text
 * @description 基础文本类，支持普通文本和飞书 markdown 格式
 */
class BasicText extends BaseClass {
  protected tag: "plain_text" | "lark_md";
  private content: string;

  constructor(tag: "plain_text" | "lark_md", content: string) {
    super();
    this.tag = tag;
    this.content = content;
  }

  setContent(content: string) {
    this.content = content;
    return this;
  }
}

/**
 * @class PlainText
 * @extends Text
 * @description 纯文本类，特化的 Text 类，tag 固定为 "plain_text"
 */
export class PlainText extends BasicText {
  protected tag: "plain_text" = "plain_text";

  constructor(content: string) {
    super("plain_text", content);
  }
}

export class CommonText {
  tag: "plain_text" | "lark_md" = "plain_text"; // 文本类型的标签
  content: string; // 文本内容。当 tag 为 lark_md 时，支持部分 Markdown 语法的文本内容。
  text_size: TextSize = "normal"; // 文本大小。默认值 normal
  text_color: TitleColor = "default"; // 文本颜色。仅在 tag 为 plain_text 时生效。默认值 default
  text_align: "left" | "center" | "right" = "left"; // 文本对齐方式。默认值 left

  constructor(tag: "plain_text" | "lark_md", content: string) {
    this.tag = tag;
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
}

export type TextSize =
  | "heading-0"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading"
  | "normal"
  | "notation"
  | "xxxx-large"
  | "xxx-large"
  | "xx-large"
  | "x-large"
  | "large"
  | "medium"
  | "small"
  | "x-small";