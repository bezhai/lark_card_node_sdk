import type { ColumnElement } from "./element";

// 水平间距类型
export type HorizontalSpacing = 'default' | 'small' | 'large';

// 水平对齐方式
export type HorizontalAlign = 'left' | 'center' | 'right';

// 自适应模式
export type FlexMode = 'none' | 'flow' | 'bisect';

// 背景样式
export type BackgroundStyle = 'default' | 'grey' | 'white';

// 垂直对齐方式
export type VerticalAlign = 'top' | 'center' | 'bottom';

// 宽度设置
export type Width = 'auto' | 'weighted' | string;

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
  public background_style: BackgroundStyle = 'default';
  public width: Width = 'auto';
  public weight: number = 1;
  public vertical_align: VerticalAlign = 'center';
  public vertical_spacing: string = '4px';
  public padding: string = '8px';
  public action?: { multi_url: MultiUrlAction };
  public elements: ColumnElement[] = [];

  /**
   * 创建列组件
   * @param config 可选的配置参数
   */
  constructor(config: Partial<{
    background_style: BackgroundStyle;
    width: Width;
    weight: number;
    vertical_align: VerticalAlign;
    vertical_spacing: string;
    padding: string;
    elements: ColumnElement[];
  }> = {}) {
    Object.assign(this, config);
  }

  /**
   * 设置背景样式
   * @param style 背景样式
   */
  public setBackgroundStyle(style: BackgroundStyle): Column {
    this.background_style = style;
    return this;
  }

  /**
   * 设置宽度和权重
   * @param width 宽度
   * @param weight 权重（仅在weighted模式下生效）
   */
  public setWidth(width: Width, weight?: number): Column {
    this.width = width;
    if (width === 'weighted' && weight) {
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

  /**
   * 转换为JSON对象
   */
  public toJSON() {
    return {
      tag: this.tag,
      background_style: this.background_style,
      width: this.width,
      weight: this.weight,
      vertical_align: this.vertical_align,
      vertical_spacing: this.vertical_spacing,
      padding: this.padding,
      action: this.action,
      elements: this.elements
    };
  }
}

/**
 * 分栏组件类
 * 用于创建多列布局，每列可以包含不同的元素
 */
export class ColumnSet {
  readonly tag: "column_set" = "column_set";
  public horizontal_spacing: HorizontalSpacing = 'default';
  public horizontal_align: HorizontalAlign = 'left';
  public margin: string = '0px';
  public flex_mode: FlexMode = 'none';
  public background_style: BackgroundStyle = 'default';
  public action?: { multi_url: MultiUrlAction };
  public columns: Column[] = [];

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
   * @param column 要添加的列
   */
  public addColumn(column: Column): ColumnSet {
    this.columns.push(column);
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
   * 转换为JSON对象
   */
  public toJSON() {
    return {
      tag: this.tag,
      horizontal_spacing: this.horizontal_spacing,
      horizontal_align: this.horizontal_align,
      margin: this.margin,
      flex_mode: this.flex_mode,
      background_style: this.background_style,
      action: this.action,
      columns: this.columns.map(col => col.toJSON())
    };
  }

  /**
   * 验证分栏配置是否合法
   * @throws {Error} 当配置不合法时抛出错误
   */
  public validate(): boolean {
    if (this.columns.length === 0) {
      throw new Error('分栏组件必须包含至少一列');
    }

    if (this.columns.length > 5) {
      throw new Error('分栏组件最多支持5列');
    }

    return true;
  }
}
