import { Icon } from "./common/icon";
import { TextSize } from "./common/text";

export class MarkdownComponent {
  tag: "markdown" = "markdown";
  text_size: TextSize = "normal";
  text_align: "left" | "center" | "right" = "left";
  icon?: Icon;
  href?: {
    urlVal?: {
      url: string;
      pc_url?: string;
      ios_url?: string;
      android_url?: string;
    };
  };
  content: string;

  constructor(content: string) {
    this.content = content;
  }

  setTextSize(text_size: TextSize) {
    this.text_size = text_size;
    return this;
  }

  setTextAlign(text_align: "left" | "center" | "right") {
    this.text_align = text_align;
    return this;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }

  setHref(href: { urlVal: { url: string; pc_url?: string; ios_url?: string; android_url?: string } }) {
    this.href = href;
    return this;
  }
}