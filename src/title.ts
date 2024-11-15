import { TitleColor } from "./color";
import { PlainText } from "./text";

// 定义 TextTag 接口
export interface TextTag {
  tag: "text_tag"; // 固定值 "text_tag"
  text: PlainText; // 标签内容
  color: "neutral" | "blue" | "green" | "yellow" | "red"; // 标签颜色
}

// 定义 I18nTextTagList 接口
export interface I18nTextTagList {
  zh_cn?: TextTag[]; // 多语言标签（中文简体）
  en_us?: TextTag[]; // 多语言标签（英文）
  ja_jp?: TextTag[]; // 多语言标签（日语）
  zh_hk?: TextTag[]; // 多语言标签（中文香港）
  zh_tw?: TextTag[]; // 多语言标签（中文台湾）
}

// 定义 Icon 接口
export interface Icon {
  img_key: string; // 图片 key
}

// 定义 UdIconStyle 接口
export interface UdIconStyle {
  color?: string; // 自定义图标颜色
}

// 定义 UdIcon 接口
export interface UdIcon {
  token: string; // 图标 token
  style?: UdIconStyle; // 图标样式
}

// 定义 Header 接口
export class CardHeader {
  title: PlainText; // 主标题
  subtitle?: PlainText; // 副标题（可选）
  text_tag_list?: TextTag[]; // 标签列表（可选）
  i18n_text_tag_list?: I18nTextTagList; // 国际化标签列表（可选）
  template?: TitleColor; // 主题颜色
  icon?: Icon; // 自定义前缀图标（可选）
  ud_icon?: UdIcon; // 图标库中的前缀图标（可选）

  constructor(title: string) {
    this.title = new PlainText(title);
  }

  color(color: TitleColor): CardHeader {
    this.template = color;
    return this;
  }
}

// 卡片结构的接口
export interface Card {
  header: CardHeader; // 卡片的 header 字段
}
