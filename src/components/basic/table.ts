import { BaseClass, HorizontalAlign, PxValue, VerticalAlign } from "../../common";
import { BaseComponent, ValidIdentifier } from "./basic";

type PageSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type RowHeight = 'low' | 'medium' | 'high' | 'auto' | `${number}px`;

type TextAlign = 'left' | 'center' | 'right';
type TextSize = "normal" | "heading";
type BackgroundStyle = 'none' | 'grey';
type TextColor = 'default' | 'grey';

type ColumnDataType = 'text' | 'lark_md' | 'options' | 'number' | 'date' | 'persons' | 'markdown';

export class HeaderStyle extends BaseClass {
  private text_align?: TextAlign;
  private text_size?: TextSize;
  private background_style?: BackgroundStyle;
  private text_color?: TextColor;
  private bold?: boolean;
  private lines?: number;

  public setTextAlign(text_align: TextAlign) {
    this.text_align = text_align;
    return this;
  }

  public setTextSize(text_size: TextSize) {
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

export class TableColumn extends BaseClass {
  name: string;
  display_name?: string;
  width?: 'auto' | `${number}px` | `${number}%`;
  vertical_align?: VerticalAlign;
  horizontal_align?: HorizontalAlign;
  data_type?: ColumnDataType;
  format?: {
    precision?: number;
    symbol?: string;
    separator?: boolean;
  };
  date_format?: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}

export class TableComponent extends BaseComponent {
  tag: 'table' = 'table';
  margin?: PxValue;
  page_size?: PageSize;
  row_height?: RowHeight;
  row_max_height?: `${number}px`;
  header_style?: HeaderStyle;
  freeze_first_column?: boolean;
  constructor(element_id: ValidIdentifier) {
    super(element_id);
  }


}
