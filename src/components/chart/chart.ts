import type { ChartColorTheme } from "../../common/color";
import { BaseComponent, ValidIdentifier } from "../basic/basic";
import type { ChartSpec } from "./chartSpec";

export class ChartElement<T extends ChartSpec> extends BaseComponent {
  tag: "chart" = "chart";
  color_theme?: ChartColorTheme;
  chart_spec: T;
  constructor(element_id: ValidIdentifier, chart_spec: T, color_theme?: ChartColorTheme) {
    super(element_id);
    this.chart_spec = chart_spec;
    this.color_theme = color_theme;
  }
}
