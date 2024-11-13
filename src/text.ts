export class PlainText {
  tag: "plain_text"; // 固定值 "plain_text"
  content: string; // 文本内容
  i18n?: I18nContent; // 多语言内容，可选

  constructor(content: string) {
    this.tag = "plain_text";
    this.content = content;
  }
}

// 定义 I18nContent 接口
export interface I18nContent {
  zh_cn?: string; // 中文（简体）
  en_us?: string; // 英文
  ja_jp?: string; // 日语
  zh_hk?: string; // 中文（香港）
  zh_tw?: string; // 中文（台湾）
}
