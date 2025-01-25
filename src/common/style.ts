export type LineCurveType =
  | "basis"
  | "linear"
  | "monotone"
  | "monotoneX"
  | "monotoneY"
  | "step"
  | "stepAfter"
  | "stepBefore"
  | "linearClosed"
  | "catmullRom"
  | "catmullRomClosed";

export type LegendOrient = "left" | "top" | "right" | "bottom";

export type LegendPosition = "start" | "middle" | "end";

export type CornerRadiusType = `${number}px` | `${number}%`; // 交互容器的圆角半径，单位是像素（px）或百分比（%）。取值遵循以下格式：[0,∞]px，如 "10px"; [0,100]%，如 "30%"

export type WidthType =
  | "fill" // 卡片最大支持宽度
  | "default" // 默认宽度
  | `${number}px`; // 固定宽度，范围为 [100, ∞]px, 超出卡片宽度时将按最大支持宽度展示

export type SinglePxValue = "0" | `${number}px`;

export type PxValue =
  | SinglePxValue
  | `${SinglePxValue} ${SinglePxValue}`
  | `${SinglePxValue} ${SinglePxValue} ${SinglePxValue} ${SinglePxValue}`;
