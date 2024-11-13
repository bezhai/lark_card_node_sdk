import { ColumnElement } from "./element";

export type HorizontalSpacing = 'default' | 'small' | 'large'; // 水平间距类型
export type HorizontalAlign = 'left' | 'center' | 'right'; // 水平对齐方式
export type FlexMode = 'none' | 'flow' | 'bisect'; // 自适应模式
export type BackgroundStyle = 'default' | 'grey' | 'white'; // 背景样式 
export type VerticalAlign = 'top' | 'center' | 'bottom'; // 垂直对齐方式
export type Width = 'auto' | 'weighted' | string; // 宽度设置

// 多端链接动作接口
export interface MultiUrlAction {
  url: string; // 默认链接
  pc_url?: string; // PC端链接
  ios_url?: string; // iOS端链接
  android_url?: string; // 安卓端链接
}


// 列组件类
export class Column {
  private tag: string = 'column';
  private background_style: BackgroundStyle = 'default'; // 背景样式
  private width: Width = 'auto'; // 宽度
  private weight: number = 1; // 权重(weighted模式下生效)
  private vertical_align: VerticalAlign = 'center'; // 垂直对齐
  private vertical_spacing: string = '4px'; // 垂直间距
  private padding: string = '8px'; // 内边距
  private action?: { multi_url: MultiUrlAction }; // 点击动作
  private elements: ColumnElement[] = []; // 子元素列表

  // 构造函数,支持部分配置
  constructor(config: Partial<Column> = {}) {
    Object.assign(this, config);
  }

  // 设置背景样式
  public setBackgroundStyle(style: BackgroundStyle): Column {
    this.background_style = style;
    return this;
  }

  // 设置宽度和权重
  public setWidth(width: Width, weight?: number): Column {
    this.width = width;
    if (width === 'weighted' && weight) {
      this.weight = weight;
    }
    return this;
  }

  // 设置垂直对齐方式
  public setVerticalAlign(align: VerticalAlign): Column {
    this.vertical_align = align;
    return this;
  }

  // 添加子元素
  public addElements(...elements: ColumnElement[]): Column {
    this.elements.push(...elements);
    return this;
  }

  // 设置点击动作
  public setAction(action: MultiUrlAction): Column {
    this.action = { multi_url: action };
    return this;
  }

  // 转换为JSON对象
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

// 分栏组件类
export class ColumnSet {
  private tag: string = 'column_set';
  private horizontal_spacing: HorizontalSpacing = 'default'; // 水平间距
  private horizontal_align: HorizontalAlign = 'left'; // 水平对齐
  private margin: string = '0px'; // 外边距
  private flex_mode: FlexMode = 'none'; // 自适应模式
  private background_style: BackgroundStyle = 'default'; // 背景样式
  private action?: { multi_url: MultiUrlAction }; // 点击动作
  private columns: Column[] = []; // 列数组

  // 构造函数,支持部分配置
  constructor(config: Partial<ColumnSet> = {}) {
    Object.assign(this, config);
  }

  // 设置水平间距
  public setHorizontalSpacing(spacing: HorizontalSpacing): ColumnSet {
    this.horizontal_spacing = spacing;
    return this;
  }

  // 设置水平对齐
  public setHorizontalAlign(align: HorizontalAlign): ColumnSet {
    this.horizontal_align = align;
    return this;
  }

  // 设置自适应模式
  public setFlexMode(mode: FlexMode): ColumnSet {
    this.flex_mode = mode;
    return this;
  }

  // 添加列
  public addColumn(column: Column): ColumnSet {
    this.columns.push(column);
    return this;
  }

  // 设置点击动作
  public setAction(action: MultiUrlAction): ColumnSet {
    this.action = { multi_url: action };
    return this;
  }

  // 转换为JSON对象
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

  // 验证分栏配置是否合法
  public validate(): boolean {
    // 基础验证规则
    if (this.columns.length === 0) {
      throw new Error('分栏组件必须包含至少一列');
    }

    if (this.columns.length > 5) {
      throw new Error('分栏组件最多支持5列');
    }

    return true;
  }
}