import { Color } from "../../common/color";
import { Icon } from "../../common/icon";
import {
  HorizontalAlign,
  HorizontalSpacing,
  PxValue,
} from "../../common/style";
import { BaseComponent, ValidIdentifier } from "./basic";
import { CardElement, CollapsiblePanelElement } from "./element";
import { BaseClass } from "../../common/json";

type HeaderTitleType = "plain_text" | "markdown";
type IconPosition = "left" | "right" | "follow_text";
type Direction = "vertical" | "horizontal";
type VerticalAlign = "top" | "center" | "bottom";
type IconExpandedAngleType = -180 | -90 | 90 | 180;
type HeaderWidthType = "auto_when_fold" | "auto" | "fill";

export class CollapsiblePanelHeader extends BaseComponent {
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

  constructor(
    element_id: ValidIdentifier,
    title: string,
    titleType: HeaderTitleType = "plain_text"
  ) {
    super(element_id);
    this.title = {
      tag: titleType,
      content: title,
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

export class CollapsiblePanelComponent extends BaseClass {
  tag: "collapsible_panel" = "collapsible_panel";
  direction?: Direction = "vertical";
  vertical_spacing?: string;
  horizontal_spacing?: HorizontalSpacing;
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
  elements: CollapsiblePanelElement[] = [];

  constructor(header: CollapsiblePanelHeader) {
    super();
    this.header = header;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
    return this;
  }

  setVerticalSpacing(spacing: string) {
    this.vertical_spacing = spacing;
    return this;
  }

  setHorizontalSpacing(spacing: HorizontalSpacing) {
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
      corner_radius,
    };
    return this;
  }

  addElement(element: CollapsiblePanelElement) {
    this.elements.push(element);
    return this;
  }

  setElements(elements: CollapsiblePanelElement[]) {
    this.elements = elements;
    return this;
  }
}
