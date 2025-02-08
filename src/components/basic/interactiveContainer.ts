import { Behavior } from "../../common/behavior";
import { Color } from "../../common/color";
import { CornerRadiusType, PxValue } from "../../common/style";
import { PlainText } from "../../common/text";
import { BaseComponent } from "./basic";
import { InteractiveElement } from "./element";

// 定义可枚举的类型
type BackgroundStyle = "default" | "laser" | Color;
type WidthType = "fill" | "auto" | `${number}px`; // 支持具体数值如 "20px", 范围是[16,999]
type HeightType = "auto" | `${number}px`; // 支持具体数值如 "100px", 范围是[10,999]

export class InteractiveContainerComponent extends BaseComponent {
  tag: "interactive_container" = "interactive_container";
  width?: WidthType; // 交互容器的宽度
  height?: HeightType; // 交互容器的高度
  background_style?: BackgroundStyle; // 交互容器的背景色样式
  has_border?: boolean; // 是否展示边框，粗细固定为 1px
  border_color?: Color; // 边框的颜色，仅 has_border 为 true 时，此字段生效
  corner_radius?: string; // 圆角大小
  padding?: PxValue; // 内边距
  behaviors: Behavior[] = []; // 行为配置数组
  hover_tips?: PlainText; // 悬浮提示信息
  disabled?: boolean; // 是否禁用交互容器，默认值为 false
  disabled_tips?: PlainText; // 禁用交互容器时的提示信息
  elements: InteractiveElement[] = []; // 内部的子元素
  margin?: PxValue; // 外边距


  addElement(element: InteractiveElement) {
    this.elements.push(element);
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

  setWidth(width: WidthType) {
    this.width = width;
    return this;
  }

  setHeight(height: HeightType) {
    this.height = height;
    return this;
  }

  setBackgroundStyle(background_style: BackgroundStyle) {
    this.background_style = background_style;
    return this;
  }

  setBorderColor(border_color: Color) {
    this.border_color = border_color;
    return this;
  }

  setCornerRadius(corner_radius: CornerRadiusType) {
    this.corner_radius = corner_radius;
    return this;
  }

  setPadding(padding: PxValue) {
    this.padding = padding;
    return this;
  }

  setHasBorder(has_border: boolean) {
    this.has_border = has_border;
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

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }
}
