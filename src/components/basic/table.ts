import { BaseClass } from "@common/json";
import { HorizontalAlign, PxValue, VerticalAlign } from "@common/style";
import { BaseComponent } from "@basic/basic";

type PageSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type RowHeight = 'low' | 'medium' | 'high' | 'auto' | `${number}px`;

type TextAlign = 'left' | 'center' | 'right';
type TableTextSize = "normal" | "heading";
type BackgroundStyle = 'none' | 'grey';
type TextColor = 'default' | 'grey';

type ColumnDataType = 'text' | 'lark_md' | 'options' | 'number' | 'date' | 'persons' | 'markdown';

export class HeaderStyle extends BaseClass {
  private text_align?: TextAlign;
  private text_size?: TableTextSize;
  private background_style?: BackgroundStyle;
  private text_color?: TextColor;
  private bold?: boolean;
  private lines?: number;

  public setTextAlign(text_align: TextAlign) {
    this.text_align = text_align;
    return this;
  }

  public setTextSize(text_size: TableTextSize) {
    this.text_size = text_size;
    return this;
  }

  public setBackgroundStyle(background_style: BackgroundStyle) {
    this.background_style = background_style;
    return this;
  }

  public setTextColor(text_color: TextColor) {
    this.text_color = text_color;
    return this;
  }

  public setBold(bold: boolean) {
    this.bold = bold;
    return this;
  }

  public setLines(lines: number) {
    this.lines = lines;
    return this;
  }
}

export class TableColumn<K extends string> extends BaseClass {
  private name: K;
  private display_name?: string;
  private width?: 'auto' | `${number}px` | `${number}%`;
  private vertical_align?: VerticalAlign;
  private horizontal_align?: HorizontalAlign;
  private data_type?: ColumnDataType;
  private format?: {
    precision?: number;
    symbol?: string;
    separator?: boolean;
  };
  private date_format?: string;

  constructor(name: K) {
    super();
    this.name = name;
  } 

  public static text<K extends string>(name: K) {
    return new TableColumn(name).setDataType('text');
  }

  public static number<K extends string>(name: K, precision?: number, symbol?: string, separator?: boolean) {
    return new TableColumn(name).setDataType('number').setFormat({ precision, symbol, separator });
  }

  public static date<K extends string>(name: K, date_format: string) {
    return new TableColumn(name).setDataType('date').setDateFormat(date_format);
  }

  public static markdown<K extends string>(name: K) {
    return new TableColumn(name).setDataType('markdown');
  }

  public static persons<K extends string>(name: K) {
    return new TableColumn(name).setDataType('persons');
  }

  public static options<K extends string>(name: K) {
    return new TableColumn(name).setDataType('options');
  }

  public static lark_md<K extends string>(name: K) {
    return new TableColumn(name).setDataType('lark_md');
  }


  public setDisplayName(display_name: string) {
    this.display_name = display_name;
    return this;
  }

  public setWidth(width: 'auto' | `${number}px` | `${number}%`) { 
    this.width = width;
    return this;
  }

  public setVerticalAlign(vertical_align: VerticalAlign) {
    this.vertical_align = vertical_align;
    return this;
  }

  public setHorizontalAlign(horizontal_align: HorizontalAlign) {
    this.horizontal_align = horizontal_align;
    return this;
  }

  private setDataType(data_type: ColumnDataType) {
    this.data_type = data_type;
    return this;
  }

  private setFormat(format: {
    precision?: number;
    symbol?: string;
    separator?: boolean;
  }) {
    this.format = format;
    return this;
  }

  private setDateFormat(date_format: string) {
    this.date_format = date_format;
    return this;
  }
}

export class TableComponent<T extends Record<string, any>> extends BaseComponent {
  tag: 'table' = 'table';
  margin?: PxValue;
  page_size?: PageSize;
  row_height?: RowHeight;
  row_max_height?: `${number}px`;
  header_style?: HeaderStyle;
  freeze_first_column?: boolean;
  columns: TableColumn<Extract<keyof T, string>>[] = [];
  rows: T[] = [];

  constructor() {
    super();
  }

  public setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }

  public setPageSize(page_size: PageSize) { 
    this.page_size = page_size;
    return this;
  }

  public setRowHeight(row_height: RowHeight) {
    this.row_height = row_height;
    return this;
  }

  public setRowMaxHeight(row_max_height: `${number}px`) {
    this.row_max_height = row_max_height;
    return this;
  }

  public setHeaderStyle(header_style: HeaderStyle) {
    this.header_style = header_style;
    return this;
  }

  public setFreezeFirstColumn(freeze_first_column: boolean) {
    this.freeze_first_column = freeze_first_column;
    return this;
  }

  public addColumn(column: TableColumn<Extract<keyof T, string>>) {
    this.columns.push(column);
    return this;
  }

  public appendRows(...rows: T[]) {
    this.rows.push(...rows);
    return this;
  }
}
