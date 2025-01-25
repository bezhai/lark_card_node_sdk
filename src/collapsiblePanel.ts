import { CardElement } from "./element";
import { Icon } from "./common/icon";
import { PxValue } from "./common/style";
import { Color } from "./common/color";

type HeaderTitleType = "plain_text" | "markdown";
type IconPosition = "left" | "right" | "follow_text";
type Direction = "vertical" | "horizontal";
type VerticalAlign = "top" | "center" | "bottom";
type HorizontalAlign = "left" | "center" | "right";
type HorizontalSpacingType = "small" | "medium" | "large" | "extra_large" | `${number}px`;
type IconExpandedAngleType = -180 | -90 | 90 | 180;
type HeaderWidthType = "auto_when_fold" | "auto" | "fill";

export class CollapsiblePanelHeader {
  title: {
    tag: HeaderTitleType;
    content: string;
  };
  background_color?: Color;
  vertical_align?: VerticalAlign;
  padding?: PxValue;
  position?: "top" | "bottom";
  width?: HeaderWidthType;
  icon?: Icon;
  icon_position?: IconPosition;
  icon_expanded_angle?: IconExpandedAngleType;

  constructor(title: string, titleType: HeaderTitleType = "plain_text") {
    this.title = {
      tag: titleType,
      content: title
    };
  }

  setBackgroundColor(color: Color) {
    this.background_color = color;
    return this;
  }

  setVerticalAlign(align: VerticalAlign) {
    this.vertical_align = align;
    return this;
  }

  setPadding(padding: PxValue) {
    this.padding = padding;
    return this;
  }

  setPosition(position: "top" | "bottom") {
    this.position = position;
    return this;
  }

  setWidth(width: HeaderWidthType) {
    this.width = width;
    return this;
  }

  setIcon(icon: Icon) {
    this.icon = icon;
    return this;
  }

  setIconPosition(position: IconPosition) {
    this.icon_position = position;
    return this;
  }

  setIconExpandedAngle(angle: IconExpandedAngleType) {
    this.icon_expanded_angle = angle;
    return this;
  }
}

export class CollapsiblePanelComponent {
  tag: "collapsible_panel" = "collapsible_panel";
  direction?: Direction = "vertical";
  vertical_spacing?: string;
  horizontal_spacing?: HorizontalSpacingType;
  vertical_align?: VerticalAlign = "top";
  horizontal_align?: HorizontalAlign = "left";
  padding?: PxValue;
  margin?: PxValue;
  expanded: boolean = false;
  background_color?: Color;
  header: CollapsiblePanelHeader;
  border?: {
    color?: Color;
    corner_radius?: `${number}px`;
  };
  elements: CardElement[] = [];

  constructor(title: string, titleType: HeaderTitleType = "plain_text") {
    this.header = new CollapsiblePanelHeader(title, titleType);
  }

  setDirection(direction: Direction) {
    this.direction = direction;
    return this;
  }

  setVerticalSpacing(spacing: string) {
    this.vertical_spacing = spacing;
    return this;
  }

  setHorizontalSpacing(spacing: HorizontalSpacingType) {
    this.horizontal_spacing = spacing;
    return this;
  }

  setVerticalAlign(align: VerticalAlign) {
    this.vertical_align = align;
    return this;
  }

  setHorizontalAlign(align: HorizontalAlign) {
    this.horizontal_align = align;
    return this;
  }

  setPadding(padding: PxValue) {
    this.padding = padding;
    return this;
  }

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }

  setExpanded(expanded: boolean) {
    this.expanded = expanded;
    return this;
  }

  setBackgroundColor(color: Color) {
    this.background_color = color;
    return this;
  }

  setBorder(color: Color, corner_radius?: `${number}px`) {
    this.border = {
      color,
      corner_radius
    };
    return this;
  }

  addElement(element: CardElement) {
    this.elements.push(element);
    return this;
  }

  setElements(elements: CardElement[]) {
    this.elements = elements;
    return this;
  }
}
