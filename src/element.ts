import type { ActionComponent } from "./action";
import type { ButtonComponent, TableButtonComponent } from "./button";
import type { ChartElement } from "./chart/chart";
import type { LineChartSpec } from "./chart/line";
import type { PieChartSpec } from "./chart/pie";
import type { WordCloudChartSpec } from "./chart/wordCloud";
import { CollapsiblePanelComponent } from "./collapsiblePanel";
import type { ColumnSet } from "./column";
import type { DivComponent } from "./div";
import type { FormComponent } from "./form";
import type { ImgComponent } from "./image";
import type { InputComponent } from "./input";
import type { InteractiveContainerComponent } from "./interactiveContainer";
import type { MarkdownComponent } from "./markdown";

type AllElement =
  | ImgComponent
  | ColumnSet
  | DivComponent
  | MarkdownComponent
  | TableButtonComponent
  | InputComponent;

export type CardElement =
  | ImgComponent
  | ColumnSet
  | DivComponent
  | MarkdownComponent
  | ChartElement<PieChartSpec>
  | ChartElement<WordCloudChartSpec>
  | ChartElement<LineChartSpec>
  | ButtonComponent
  | ActionComponent
  | FormComponent
  | InteractiveContainerComponent
  | CollapsiblePanelComponent;

export type ColumnElement = ImgComponent | DivComponent | MarkdownComponent;

/**
 * 在卡片 JSON 1.0 结构中：
 * 表单容器不支持内嵌表格（table）、图表（chart）、和表单容器组件。
 * 表单容器中不可直接内嵌标签为 div 的组件。你可先内嵌分栏组件，再在分栏组件中内嵌标签为 div 类型的组件。
 * 表单容器组件不可被内嵌在其它组件内，只可放在卡片根节点下。
 */
export type FormElement = Exclude<AllElement, DivComponent>;

/**
 * 交互容器内嵌的组件。仅支持内嵌普通文本、富文本、图片、备注、分栏、勾选器、交互容器组件。
 */
export type InteractiveElement =
  | DivComponent
  | ImgComponent
  | MarkdownComponent
  | ColumnSet
  | InteractiveContainerComponent;

/**
 * 卡片1.0 支持的交互组件
 */
export type ActionElement = ButtonComponent;
