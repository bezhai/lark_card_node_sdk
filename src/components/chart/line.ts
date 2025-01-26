import type { LineCurveType } from "../../common/style";
import { ChartSpec } from "./chartSpec";
import type { ChartSpecLegend } from "./chartSpec";

export class LineChartSpec extends ChartSpec {
  xField: string;
  yField: string;
  seriesField?: string;
  line?: {
    style?: {
        curveType? : LineCurveType;
    };
  };

  constructor(
    title: { text: string },
    xField: string,
    yField: string,
    seriesField?: string,
    label?: { visible?: boolean },
    legends?: ChartSpecLegend,
    curveType?: LineCurveType
  ) {
    super("line", title, label, legends);
    this.xField = xField;
    this.yField = yField;
    this.seriesField = seriesField;
    this.label = label;
    this.legends = legends;
    this.line = {
        style: {
            curveType: curveType
        }
    };
  }

  /**
   * 添加数据点
   */
  addLineData(xValue: any, yValue: any, series?: string): void {
    const dataPoint: { [key: string]: any } = {
      [this.xField]: xValue,
      [this.yField]: yValue,
    };

    if (this.seriesField && series) {
      dataPoint[this.seriesField] = series;
    }

    this.addData(dataPoint);
  }
}
