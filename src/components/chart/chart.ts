import type { ChartColorTheme } from '@common/color';
import { BaseComponent } from '@basic/basic';
import type { ChartSpec } from './chartSpec';

export class ChartElement<T extends ChartSpec> extends BaseComponent {
  private readonly tag: 'chart' = 'chart';
  private color_theme?: ChartColorTheme;
  private chart_spec: T;

  constructor(chart_spec: T, color_theme?: ChartColorTheme) {
    super();
    this.chart_spec = chart_spec;
    this.color_theme = color_theme;
  }
}
