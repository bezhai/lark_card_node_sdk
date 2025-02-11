import { BaseClass } from './json';
import { PlainText } from './text';

// 定义确认提示类型
export class ConfirmTips extends BaseClass {
  private title: PlainText; // 二次确认弹窗标题
  private content: PlainText; // 二次确认弹窗文本

  constructor(title: string, content: string) {
    super();
    this.title = new PlainText(title);
    this.content = new PlainText(content);
  }
}
