import type { Behavior } from "./common/behavior";
import type { Icon } from "./common/icon";
import { PlainText } from "./common/text";

// 定义按钮类型
type ButtonType =
  | "default" // 黑色字体按钮，有边框
  | "primary" // 蓝色字体按钮，有边框
  | "danger" // 红色字体按钮，有边框
  | "text" // 黑色字体按钮，无边框
  | "primary_text" // 蓝色字体按钮，无边框
  | "danger_text" // 红色字体按钮，无边框
  | "primary_filled" // 蓝底白字按钮
  | "danger_filled" // 红底白字按钮
  | "laser"; // 镭射按钮
type ButtonSize =
  | "tiny" // 超小尺寸，PC 端为 24 px；移动端为 28 px
  | "small" // 小尺寸，PC 端为 28 px；移动端为 28 px
  | "medium" // 中等尺寸，PC 端为 32 px；移动端为 36 px
  | "large"; // 大尺寸，PC 端为 40 px；移动端为 48 px
type WidthType =
  | "fill" // 卡片最大支持宽度
  | "default" // 默认宽度
  | `${number}px`; // 固定宽度，范围为 [100, ∞]px, 超出卡片宽度时将按最大支持宽度展示

// 定义确认提示类型
interface ConfirmTips {
  title: PlainText; // 二次确认弹窗标题
  content: PlainText; // 二次确认弹窗文本
}

export class ButtonComponent {
  tag: "button" = "button"; // 固定为 "button"
  type: ButtonType = "default"; // 按钮类型，默认值为 "default"
  size?: ButtonSize = "medium"; // 按钮尺寸，默认值为 "medium"
  width?: WidthType; // 按钮宽度
  text?: PlainText; // 按钮文本内容
  icon?: Icon; // 按钮图标
  hover_tips?: PlainText; // 悬浮提示信息
  disabled?: boolean = false; // 是否禁用按钮，默认值为 false
  disabled_tips?: PlainText; // 按钮禁用时的提示信息
  confirm?: ConfirmTips; // 按钮点击时的二次确认提示信息
  behaviors: Behavior[] = []; // 行为配置数组


  setType(type: ButtonType) {
    this.type = type;
    return this;
  }

  setSize(size: ButtonSize) {
    this.size = size;
    return this;
  }

  setWidth(width: WidthType) {
    this.width = width;
    return this;
  }

  setText(content: string) {
    this.text = new PlainText(content);
    return this;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }

  setHoverTips(content: string) {
    this.hover_tips = new PlainText(content);
    return this;
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  setDisabledTips(content: string) {
    this.disabled_tips = new PlainText(content);
    return this;
  }

  setConfirm(title: string, content: string) {
    this.confirm = {
      title: new PlainText(title),
      content: new PlainText(content),
    };
    return this;
  }

  addOpenUrlBehavior(
    default_url: string,
    android_url?: string,
    ios_url?: string,
    pc_url?: string
  ) {
    const behavior: Behavior = {
      tag: "open_url",
      default_url: default_url,
      android_url: android_url,
      ios_url: ios_url,
      pc_url: pc_url,
    };
    this.behaviors.push(behavior);
    return this;
  }

  addCallbackBehavior(value: string | Record<string, unknown>) {
    const behavior: Behavior = {
      tag: "callback",
      value: value,
    };
    this.behaviors.push(behavior);
    return this;
  }
}
