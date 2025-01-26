import { PlainText } from "./text";

// 定义确认提示类型
export class ConfirmTips {
  title: PlainText; // 二次确认弹窗标题
  content: PlainText; // 二次确认弹窗文本

  constructor(title: string, content: string) {
    this.title = new PlainText(title);
    this.content = new PlainText(content);
  }
}
