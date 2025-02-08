import { TitleColor } from "../../common/color";
import {
  Width,
  VerticalAlign,
  HorizontalSpacing,
  HorizontalAlign,
  FlexMode,
  PxValue,
} from "../../common/style";
import type { ColumnElement } from "./element";

type Weight = 1 | 2 | 3 | 4 | 5;

// 多端链接动作接口
export interface MultiUrlAction {
  url: string; // 默认链接
  pc_url?: string; // PC端链接
  ios_url?: string; // iOS端链接
  android_url?: string; // 安卓端链接
}

/**
 * 列组件类
 * 用于在分栏组件中创建单个列，可以包含多个元素
 */
export class Column {
  readonly tag: "column" = "column";
  background_style?: TitleColor;
  width?: Width;
  weight?: Weight;
  vertical_align?: VerticalAlign;
  vertical_spacing?: string;
  padding?: string;
  action?: { multi_url: MultiUrlAction };
  elements: ColumnElement[] = [];


  /**
   * 设置背景样式
   * @param style 背景样式
   */
  public setBackgroundStyle(style: TitleColor): Column {
    this.background_style = style;
    return this;
  }

  /**
   * 设置宽度和权重
   * @param width 宽度
   * @param weight 权重（仅在weighted模式下生效）
   */
  public setWidth(width: Width, weight?: Weight): Column {
    this.width = width;
    if (width === "weighted" && weight) {
      this.weight = weight;
    }
    return this;
  }

  /**
   * 设置垂直对齐方式
   * @param align 对齐方式
   */
  public setVerticalAlign(align: VerticalAlign): Column {
    this.vertical_align = align;
    return this;
  }

  /**
   * 添加子元素
   * @param elements 要添加的元素
   */
  public addElements(...elements: ColumnElement[]): Column {
    this.elements.push(...elements);
    return this;
  }

  /**
   * 设置点击动作
   * @param action 多端链接动作
   */
  public setAction(action: MultiUrlAction): Column {
    this.action = { multi_url: action };
    return this;
  }
}

/**
 * 分栏组件类
 * 用于创建多列布局，每列可以包含不同的元素
 */
export class ColumnSet {
  readonly tag: "column_set" = "column_set";
  horizontal_spacing?: HorizontalSpacing;
  horizontal_align?: HorizontalAlign;
  margin?: PxValue;
  flex_mode?: FlexMode;
  background_style?: TitleColor;
  action?: { multi_url: MultiUrlAction };
  columns: Column[] = [];

  /**
   * 设置水平间距
   * @param spacing 间距大小
   */
  public setHorizontalSpacing(spacing: HorizontalSpacing): ColumnSet {
    this.horizontal_spacing = spacing;
    return this;
  }

  /**
   * 设置水平对齐
   * @param align 对齐方式
   */
  public setHorizontalAlign(align: HorizontalAlign): ColumnSet {
    this.horizontal_align = align;
    return this;
  }

  /**
   * 设置自适应模式
   * @param mode 自适应模式
   */
  public setFlexMode(mode: FlexMode): ColumnSet {
    this.flex_mode = mode;
    return this;
  }

  /**
   * 添加列
   * @param columns 要添加的列
   */
  public addColumns(...columns: Column[]): ColumnSet {
    this.columns.push(...columns);
    return this;
  }

  /**
   * 设置点击动作
   * @param action 多端链接动作
   */
  public setAction(action: MultiUrlAction): ColumnSet {
    this.action = { multi_url: action };
    return this;
  }


  /**
   * 设置外边距
   * @param margin 外边距大小
   */
  public setMargin(margin: PxValue): ColumnSet {
    this.margin = margin;
    return this;
  }
}
