import { ChartElement } from "../chart/chart";
import { LineChartSpec } from "../chart/line";
import { PieChartSpec } from "../chart/pie";
import { WordCloudChartSpec } from "../chart/wordCloud";
import { FormComponent } from "../form/form";
import { InputComponent } from "../form/input";
import type { ButtonComponent, TableButtonComponent } from "../form/button";
import type { SelectComponent } from "../form/select";
import { CollapsiblePanelComponent } from "./collapsiblePanel";
import type { ColumnSet } from "./column";
import type { DivComponent } from "./div";
import type { HrComponent } from "./hr";
import type { ImgComponent } from "./image";
import type { InteractiveContainerComponent } from "./interactiveContainer";
import type { MarkdownComponent } from "./markdown";
import { CheckboxComponent } from "../form/checkbox";
import { MultiSelectComponent } from "../form/multiSelect";

/**
 * 卡片基础组件类型，除了表单组件
 */
type CardElementExcludeFormAndTable =
  | ImgComponent
  | CollapsiblePanelComponent
  | DivComponent
  | HrComponent
  | InteractiveContainerComponent
  | MarkdownComponent
  | ChartElement<PieChartSpec | WordCloudChartSpec | LineChartSpec>
  | ColumnSet
  | DivComponent
  | HrComponent
  | MarkdownComponent;

// TODO: 增加表格组件
export type CardElement = CardElementExcludeFormAndTable | FormComponent;

/**
 * 交互型组件类型
 * 包含所有用户可以进行交互的表单组件
 * 如按钮、复选框、多选框、表格按钮、输入框、下拉选择等
 */
type ActionElement =
  | ButtonComponent
  | CheckboxComponent
  | MultiSelectComponent
  | TableButtonComponent
  | InputComponent
  | SelectComponent;

/**
 * 所有可用组件类型的联合
 * 包含基础组件(CardElement)和交互组件(ActionElement)
 */
type AllElementWithFormAndTable = CardElementExcludeFormAndTable | FormComponent;

/**
 * 分栏组件支持的元素类型
 * 不支持表单组件和表格组件(未实现)
 * 用于定义可以放置在分栏布局中的组件类型
 */
export type ColumnElement = AllElementWithFormAndTable;

/**
 * 表单容器支持的元素类型
 * 不支持内嵌表格（table）和表单容器组件
 * 继承自ColumnElement，具有相同的组件支持范围
 */
export type FormElement = AllElementWithFormAndTable;

/**
 * 交互容器支持的元素类型
 * 用于定义可以放置在交互容器中的组件
 * 继承自ColumnElement，具有相同的组件支持范围
 */
export type InteractiveElement = AllElementWithFormAndTable;

/**
 * 折叠面板支持的元素类型
 * 支持大部分基础组件和交互组件
 * 仅不支持内嵌表单组件，以避免复杂的嵌套结构
 */
export type CollapsiblePanelElement = AllElementWithFormAndTable; // TODO: 增加表格组件
