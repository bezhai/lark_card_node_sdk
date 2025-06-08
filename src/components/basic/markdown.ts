import { Icon } from '../../common/icon';
import { TextSize } from '../../common/text';
import { BaseComponent } from './basic';

export class MarkdownComponent extends BaseComponent {
  private readonly tag: 'markdown' = 'markdown';
  private text_size: TextSize = 'normal';
  private text_align: 'left' | 'center' | 'right' = 'left';
  private icon?: Icon;
  private href?: {
    urlVal?: {
      url: string;
      pc_url?: string;
      ios_url?: string;
      android_url?: string;
    };
  };
  private content: string;

  constructor(content: string) {
    super();
    this.content = content;
  }

  setTextSize(text_size: TextSize) {
    this.text_size = text_size;
    return this;
  }

  setTextAlign(text_align: 'left' | 'center' | 'right') {
    this.text_align = text_align;
    return this;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }

  setHref(href: {
    urlVal: { url: string; pc_url?: string; ios_url?: string; android_url?: string };
  }) {
    this.href = href;
    return this;
  }
}
