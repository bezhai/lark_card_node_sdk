import { Behavior } from '../../common/behavior';
import { Color } from '../../common/color';
import {
  CornerRadiusType,
  HorizontalAlign,
  PxValue,
  Spacing,
  VerticalAlign,
} from '../../common/style';
import { PlainText } from '../../common/text';
import { BaseElementContainer } from './baseElementContainer';
import { InteractiveElement } from './element';

// 定义可枚举的类型
type BackgroundStyle = 'default' | 'laser' | Color;
type WidthType = 'fill' | 'auto' | `${number}px`; // 支持具体数值如 "20px", 范围是[16,999]
type HeightType = 'auto' | `${number}px`; // 支持具体数值如 "100px", 范围是[10,999]

export class InteractiveContainerComponent extends BaseElementContainer<InteractiveElement> {
  private readonly tag: 'interactive_container' = 'interactive_container';
  private width?: WidthType; // 交互容器的宽度
  private height?: HeightType; // 交互容器的高度
  private margin?: PxValue; // 外边距
  private direction?: 'horizontal' | 'vertical'; // 方向
  private horizontal_spacing?: Spacing; // 水平间距
  private horizontal_align?: HorizontalAlign; // 水平对齐方式
  private vertical_spacing?: Spacing; // 垂直间距
  private vertical_align?: VerticalAlign; // 垂直对齐方式
  private background_style?: BackgroundStyle; // 交互容器的背景色样式
  private has_border?: boolean; // 是否展示边框，粗细固定为 1px
  private border_color?: Color; // 边框的颜色，仅 has_border 为 true 时，此字段生效
  private corner_radius?: CornerRadiusType; // 圆角大小
  private padding?: PxValue; // 内边距
  private behaviors: Behavior[] = []; // 行为配置数组
  private hover_tips?: PlainText; // 悬浮提示信息
  private disabled?: boolean = false; // 是否禁用交互容器，默认值为 false
  private disabled_tips?: PlainText; // 禁用交互容器时的提示信息

  addOpenUrlBehavior(default_url: string, android_url?: string, ios_url?: string, pc_url?: string) {
    const behavior: Behavior = {
      type: 'open_url',
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
      type: 'callback',
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

  setDirection(direction: 'horizontal' | 'vertical') {
    this.direction = direction;
    return this;
  }

  setHorizontalSpacing(spacing: Spacing) {
    this.horizontal_spacing = spacing;
    return this;
  }

  setVerticalSpacing(spacing: Spacing) {
    this.vertical_spacing = spacing;
    return this;
  }

  setHorizontalAlign(align: HorizontalAlign) {
    this.horizontal_align = align;
    return this;
  }

  setVerticalAlign(align: VerticalAlign) {
    this.vertical_align = align;
    return this;
  }
}
