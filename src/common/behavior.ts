export type Behavior = OpenUrlBehavior | CallbackBehavior;

/**
 * 跳转链接交互
 */
interface OpenUrlBehavior {
  type: 'open_url';
  default_url: string; // 兜底跳转地址
  android_url?: string; // 安卓端跳转地址, 可配置为 lark://msgcard/unsupported_action 声明当前端不允许跳转
  ios_url?: string; // iOS端跳转地址, 可配置为 lark://msgcard/unsupported_action 声明当前端不允许跳转
  pc_url?: string; // PC端跳转地址, 可配置为 lark://msgcard/unsupported_action 声明当前端不允许跳转
}

/**
 * 服务端回传交互
 */
interface CallbackBehavior {
  type: 'callback';
  value: string | Record<string, unknown>; // 回传交互数据
}