import { BaseClass } from "../common/json";

export class Summary extends BaseClass {
  private content: string;
  constructor(content: string) {
    super();
    this.content = content; // 自定义摘要信息。默认为"生成中"
  }

  toJSON() {
    return {
      content: this.content,
    };
  }
}

export class StreamConfig extends BaseClass {
  private print_frequency_ms?: {
    default?: number;
    android?: number;
    ios?: number;
    pc?: number;
  }; // 流式更新频率，单位：ms
  private print_step?: {
    default?: number;
    android?: number;
    ios?: number;
    pc?: number;
  }; // 流式更新步长，单位：字符数
  private print_strategy?: "fast" | "delay"; // 流式更新策略，枚举值，可取：fast/delay
  withPrintStrategy(print_strategy: "fast" | "delay") {
    this.print_strategy = print_strategy;
    return this;
  }

  withPrintFrequency(
    ms: number,
    platform: "android" | "ios" | "pc" | "default" = "default"
  ) {
    this.print_frequency_ms = this.print_frequency_ms || {};
    this.print_frequency_ms[platform] = ms;
    return this;
  }

  withPrintStep(
    step: number,
    platform: "android" | "ios" | "pc" | "default" = "default"
  ) {
    this.print_step = this.print_step || {};
    this.print_step[platform] = step;
    return this;
  }

  toJSON() {
    return {
      print_frequency_ms: this.print_frequency_ms,
      print_step: this.print_step,
      print_strategy: this.print_strategy,
    };
  }
}

export class Config {
  private streaming_mode?: boolean; // 卡片是否处于流式更新模式
  private streaming_config?: StreamConfig; // 流式更新配置
  private summary?: Summary; // 卡片在流式更新时显示的摘要内容
  private update_multi?: boolean; // 控制卡片是否为共享卡片。开启共享卡片后，同一张卡片的更新内容会对所有收到这张卡片的用户展示。默认值 false
  private enable_forward?: boolean = true; // 是否支持转发卡片。默认值 true
  private width_mode?: "wide" | "default" | "full" = "default"; // 卡片宽度，窄版："default"，宽版："wide"，全屏："full"
  private enable_forward_interaction?: boolean = false; // 是否支持转发卡片的交互。默认值 false
  private style?: any; // 添加自定义字号和颜色 TODO: 待补充

  withSummary(summary: Summary) {
    this.summary = summary;
    return this;
  }

  withStreamingMode(streaming_mode: boolean, streaming_config?: StreamConfig) {
    this.streaming_mode = streaming_mode;
    this.streaming_config = streaming_config;
    return this;
  }

  withUpdateMulti(update_multi: boolean) {
    this.update_multi = update_multi;
    return this;
  }

  withEnableForward(enable_forward: boolean) {
    this.enable_forward = enable_forward;
    return this;
  }

  withWidthMode(width_mode: "wide" | "default" | "full") {
    this.width_mode = width_mode;
    return this;
  }

  withEnableForwardInteraction(enable_forward_interaction: boolean) {
    this.enable_forward_interaction = enable_forward_interaction;
    return this;
  }

  toJSON() {
    return {
      streaming_mode: this.streaming_mode,
      streaming_config: this.streaming_config,
      summary: this.summary,
      update_multi: this.update_multi,
      enable_forward: this.enable_forward,
      width_mode: this.width_mode,
      enable_forward_interaction: this.enable_forward_interaction,
      style: this.style,
    }
  }
}
