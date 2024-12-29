import { ChartElement } from "./chart/chart";
import { LineChartSpec } from "./chart/line";
import { PieChartSpec } from "./chart/pie";
import { WordCloudChartSpec } from "./chart/wordCloud";
import { ColumnSet } from "./column";
import { DivComponent } from "./div";
import { ImgComponent } from "./image";
import { MarkdownComponent } from "./markdown";

type AllElement = ImgComponent | ColumnSet | DivComponent | MarkdownComponent;

export type CardElement =
  | ImgComponent
  | ColumnSet
  | DivComponent
  | MarkdownComponent
  | ChartElement<PieChartSpec>
  | ChartElement<WordCloudChartSpec>
  | ChartElement<LineChartSpec>;

export type ColumnElement = ImgComponent | DivComponent | MarkdownComponent;

/**
 * 在卡片 JSON 1.0 结构中：
 * 表单容器不支持内嵌表格（table）、图表（chart）、和表单容器组件。
 * 表单容器中不可直接内嵌标签为 div 的组件。你可先内嵌分栏组件，再在分栏组件中内嵌标签为 div 类型的组件。
 * 表单容器组件不可被内嵌在其它组件内，只可放在卡片根节点下。
 */
export type FormElement = Exclude<AllElement, DivComponent>;
