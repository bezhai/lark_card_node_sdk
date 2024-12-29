import { ChartColorTheme } from "../common/color";
import { ChartSpec } from "./chartSpec";

export class ChartElement<T extends ChartSpec> {
  tag: "chart" = "chart";
  color_theme?: ChartColorTheme;
  chart_spec: T;
  constructor(chart_spec: T, color_theme?: ChartColorTheme) {
    this.chart_spec = chart_spec;
    this.color_theme = color_theme;
  }
}
