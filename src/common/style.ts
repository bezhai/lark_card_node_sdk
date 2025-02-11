export type LineCurveType =
  | 'basis'
  | 'linear'
  | 'monotone'
  | 'monotoneX'
  | 'monotoneY'
  | 'step'
  | 'stepAfter'
  | 'stepBefore'
  | 'linearClosed'
  | 'catmullRom'
  | 'catmullRomClosed';

export type LegendOrient = 'left' | 'top' | 'right' | 'bottom';

export type LegendPosition = 'start' | 'middle' | 'end';

export type CornerRadiusType = `${number}px` | `${number}%`; // 交互容器的圆角半径，单位是像素（px）或百分比（%）。取值遵循以下格式：[0,∞]px，如 "10px"; [0,100]%，如 "30%"

export type WidthType =
  | 'fill' // 卡片最大支持宽度
  | 'default' // 默认宽度
  | `${number}px`; // 固定宽度，范围为 [100, ∞]px, 超出卡片宽度时将按最大支持宽度展示

export type SinglePxValue = '0' | `${number}px`;

export type TwoPxValue = `${SinglePxValue} ${SinglePxValue}`;
export type FourPxValue = `${SinglePxValue} ${SinglePxValue} ${SinglePxValue} ${SinglePxValue}`;

export type PxValue = SinglePxValue | TwoPxValue | FourPxValue;

// 定义基础字符集
export type Letter =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type HorizontalAlign = 'left' | 'center' | 'right';

// 间距类型
export type Spacing = 'small' | 'medium' | 'large' | 'extra_large' | `${number}px`;

// 自适应模式
export type FlexMode = 'none' | 'flow' | 'bisect';

// 垂直对齐方式
export type VerticalAlign = 'top' | 'center' | 'bottom';

// 宽度设置
export type Width = 'auto' | 'weighted' | `${number}px`;

// 方向
export type Direction = 'vertical' | 'horizontal';
