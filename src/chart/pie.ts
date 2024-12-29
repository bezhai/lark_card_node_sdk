import { ChartSpec, ChartSpecLegend } from "./chartSpec";

type PieState = "hover" | "selected";

interface PieChartStyle {
  outerRadius?: number;
  innerRadius?: number;
  padAngle?: number;
  stroke?: string;
  lineWidth?: number;
}

export interface PieChartCustomization {
  style?: PieChartStyle;
  state?: {
    [key in PieState]?: PieChartStyle;
  };
}

export class PieChartSpec extends ChartSpec {
  valueField: string;
  categoryField: string;
  pie?: PieChartCustomization;

  constructor(
    title: { text: string },
    valueField: string,
    categoryField: string,
    pie?: PieChartCustomization,
    label?: { visible?: boolean },
    legends?: ChartSpecLegend
  ) {
    super("pie", title, label, legends);
    this.valueField = valueField;
    this.categoryField = categoryField;
    this.pie = pie;
  }

  /**
   * 添加数据点
   */
  addPieData(value: any, category: any): void {
    const dataPoint: { [key: string]: any } = {
      [this.valueField]: value,
      [this.categoryField]: category,
    };
    this.addData(dataPoint);
  }
}
