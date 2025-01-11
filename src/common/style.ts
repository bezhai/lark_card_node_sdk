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
