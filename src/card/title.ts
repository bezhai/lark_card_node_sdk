import { TitleColor } from '@common/color';
import { PlainText } from '@common/text';
import { BaseClass } from '@common/json';

// 定义 TextTag 接口
export interface TextTag {
  tag: 'text_tag'; // 固定值 "text_tag"
  text: PlainText; // 标签内容
  color: 'neutral' | 'blue' | 'green' | 'yellow' | 'red'; // 标签颜色
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
interface Icon {
  img_key: string; // 图片 key
}

// 定义 UdIconStyle 接口
interface UdIconStyle {
  color?: string; // 自定义图标颜色
}

// 定义 UdIcon 接口
interface UdIcon {
  token: string; // 图标 token
  style?: UdIconStyle; // 图标样式
}

// 定义 Header 接口
export class CardHeader extends BaseClass {
  private title: PlainText; // 主标题
  private subtitle?: PlainText; // 副标题（可选）
  private text_tag_list?: TextTag[]; // 标签列表（可选）
  private i18n_text_tag_list?: I18nTextTagList; // 国际化标签列表（可选）
  private template?: TitleColor; // 主题颜色
  private icon?: Icon; // 自定义前缀图标（可选）
  private ud_icon?: UdIcon; // 图标库中的前缀图标（可选）

  constructor(title: string) {
    super();
    this.title = new PlainText(title);
  }

  color(color: TitleColor): CardHeader {
    this.template = color;
    return this;
  }

  setSubtitle(subtitle: string): CardHeader {
    this.subtitle = new PlainText(subtitle);
    return this;
  }

  setTextTagList(text_tag_list: TextTag[]): CardHeader {
    this.text_tag_list = text_tag_list;
    return this;
  }

  setI18nTextTagList(i18n_text_tag_list: I18nTextTagList): CardHeader {
    this.i18n_text_tag_list = i18n_text_tag_list;
    return this;
  }

  setIcon(icon: Icon): CardHeader {
    this.icon = icon;
    return this;
  }

  setUdIcon(ud_icon: UdIcon): CardHeader {
    this.ud_icon = ud_icon;
    return this;
  }
}
