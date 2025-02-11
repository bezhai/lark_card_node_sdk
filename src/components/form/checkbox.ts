import { Behavior } from '../../common/behavior';
import { ConfirmTips } from '../../common/confirm';
import { FourPxValue, SinglePxValue } from '../../common/style';
import { CommonText, PlainText } from '../../common/text';
import { BaseComponent } from '../basic/basic';
import { ButtonComponent } from './button';

export class CheckboxComponent extends BaseComponent {
  tag: 'checkbox' = 'checkbox';
  name?: string;
  checked?: boolean = false;
  text?: CommonText;
  overall_checkable?: boolean = true;
  button_area: {
    pc_display_rule?: 'on_hover' | 'always';
    button?: ButtonComponent[];
  } = {};
  checked_style: {
    show_strikethrough?: boolean;
    opacity?: number;
  } = {};
  margin?: SinglePxValue | FourPxValue;
  padding?: SinglePxValue | FourPxValue;
  behaviors: Behavior[] = [];
  hover_tips?: PlainText;
  disabled?: boolean = false;
  disabled_tips?: PlainText;
  confirm?: ConfirmTips;

  /**
   * 设置勾选器名称
   * @param name 勾选器的唯一标识
   */
  setName(name: string) {
    this.name = name;
    return this;
  }

  /**
   * 设置勾选状态
   * @param checked true: 勾选, false: 未勾选
   */
  setChecked(checked: boolean) {
    this.checked = checked;
    return this;
  }

  /**
   * 当光标悬浮在勾选器上时，勾选器整体是否有阴影效果
   * @param overall_checkable true: 整体有阴影效果, false: 整体无阴影效果
   * @description 要取消阴影效果，你需确保 overall_checkable 为 false 且 pc_display_rule 不为 on_hover
   */
  setOverallCheckable(overall_checkable: boolean) {
    this.overall_checkable = overall_checkable;
    return this;
  }

  /**
   * 设置勾选器右侧按钮区域的展示规则
   * @param pc_display_rule 展示规则
   * @description 当 pc_display_rule 为 on_hover 时，勾选器右侧按钮区域仅在光标悬浮在勾选器上时展示
   */
  setPcDisplayRule(pc_display_rule: 'on_hover' | 'always') {
    this.button_area.pc_display_rule = pc_display_rule;
    return this;
  }

  /**
   * 设置勾选器右侧按钮区域的按钮
   * @param button 按钮组件数组
   */
  setButton(button: ButtonComponent[]) {
    this.button_area.button = button;
    return this;
  }

  /**
   * 设置勾选时显示删除线
   * @param show_strikethrough true: 勾选时显示删除线, false: 勾选时不显示删除线
   */
  setShowStrikethrough(show_strikethrough: boolean) {
    this.checked_style.show_strikethrough = show_strikethrough;
    return this;
  }

  /**
   * 设置勾选时的透明度
   * @param opacity 透明度值，取值范围为 0 到 1，0 表示完全透明，1 表示完全不透明
   */
  setOpacity(opacity: number) {
    this.checked_style.opacity = opacity;
    return this;
  }

  /**
   * 设置勾选器的外边距
   * @param margin 外边距值，支持单个值或两个值
   * @description 当 margin 为单个值时，该值将应用于所有边；当 margin 为两个值时，第一个值将应用于上和下边，第二个值将应用于左边和右边
   */
  setMargin(margin: SinglePxValue | FourPxValue) {
    this.margin = margin;
    return this;
  }

  /**
   * 设置勾选器的内边距
   * @param padding 内边距值，支持单个值或两个值
   * @description 当 padding 为单个值时，该值将应用于所有边；当 padding 为两个值时，第一个值将应用于上和下边，第二个值将应用于左边和右边
   */
  setPadding(padding: SinglePxValue | FourPxValue) {
    this.padding = padding;
    return this;
  }

  /**
   * 设置勾选器的提示信息
   * @param hover_tips 提示信息的文本内容
   */
  setHoverTips(hover_tips: PlainText) {
    this.hover_tips = hover_tips;
    return this;
  }

  /**
   * 设置是否禁用
   * @param disabled true: 禁用勾选器, false: 启用勾选器
   */
  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  /**
   * 设置禁用时的提示信息
   * @param disabled_tips 禁用时的提示信息文本内容
   */
  setDisabledTips(disabled_tips: PlainText) {
    this.disabled_tips = disabled_tips;
    return this;
  }

  /**
   * 设置勾选器文本
   * @param text 勾选器显示的文本内容
   */
  setText(text: CommonText) {
    this.text = text;
    return this;
  }

  /**
   * 设置勾选器行为配置
   * @param behaviors 行为配置对象数组
   */
  setBehaviors(behaviors: Array<Behavior>) {
    this.behaviors = behaviors;
    return this;
  }

  /**
   * 设置勾选器点击时的二次确认提示信息
   * @param confirm 二次确认提示信息对象
   */
  setConfirm(confirm: ConfirmTips) {
    this.confirm = confirm;
    return this;
  }
}
