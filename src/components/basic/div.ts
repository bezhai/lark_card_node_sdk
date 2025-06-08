import type { Icon } from '../../common/icon';
import { CommonText } from '../../common/text';
import { BaseComponent } from './basic';

export class DivText extends CommonText {
  private lines?: number; // 内容最大显示行数，超出设置行的内容用... 省略。

  setLines(lines: number) {
    this.lines = lines;
    return this;
  }
}

export class DivComponent extends BaseComponent {
  private readonly tag: 'div';
  private text: DivText;
  private icon?: Icon;

  constructor(text: DivText) {
    super();
    this.tag = 'div';
    this.text = text;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }
}
