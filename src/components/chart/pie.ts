import { ChartSpec } from "./chartSpec";
import type { ChartSpecLegend } from "./chartSpec";

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
  outerRadius?: number;
  innerRadius?: number;

  constructor(
    title: { text: string },
    valueField: string,
    categoryField: string,
    label?: { visible?: boolean },
    legends?: ChartSpecLegend
  ) {
    super("pie", title, label, legends);
    this.valueField = valueField;
    this.categoryField = categoryField;
  }

  setPie(pie: PieChartCustomization) {
    this.pie = pie;
    return this;
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

  setOuterRadius(radius: number) {
    this.outerRadius = radius;
    return this;
  }

  setInnerRadius(radius: number) {
    this.innerRadius = radius;
    return this;
  }
}
