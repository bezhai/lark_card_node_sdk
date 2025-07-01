import { HorizontalAlign, PxValue, Spacing, VerticalAlign } from '@common/style';

export class WithPadding {
  private padding?: PxValue;

  setPadding(padding: PxValue) {
    this.padding = padding;
    return this;
  }
}

export class WithMargin {
  private margin?: PxValue;

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }
}

export class WithHorizontal {
  private horizontal_align?: HorizontalAlign;
  private horizontal_spacing?: Spacing;

  setHorizontalAlign(horizontal_align: HorizontalAlign) {
    this.horizontal_align = horizontal_align;
    return this;
  }

  setHorizontalSpacing(horizontal_spacing: Spacing) {
    this.horizontal_spacing = horizontal_spacing;
    return this;
  }
}

export class WithVertical {
  private vertical_align?: VerticalAlign;
  private vertical_spacing?: Spacing;

  setVerticalAlign(vertical_align: VerticalAlign) {
    this.vertical_align = vertical_align;
    return this;
  }

  setVerticalSpacing(vertical_spacing: Spacing) {
    this.vertical_spacing = vertical_spacing;
    return this;
  }
}
