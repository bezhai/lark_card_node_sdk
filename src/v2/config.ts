export class Summary {
  content: string;
  constructor(content: string) {
    this.content = content; // 自定义摘要信息。默认为“生成中”
  }
}

export class Config {
  streaming_mode?: boolean; // 卡片是否处于流式更新模式
  summary?: Summary; // 卡片在流式更新时显示的摘要内容
  update_multi?: boolean; // 控制卡片是否为共享卡片。开启共享卡片后，同一张卡片的更新内容会对所有收到这张卡片的用户展示。默认值 false
  enable_forward?: boolean = true; // 是否支持转发卡片。默认值 true
  width_mode?: "wide" | "default" | "full" = "default"; // 卡片宽度，窄版："default"，宽版："wide"，全屏："full"
  enable_forward_interaction?: boolean = false; // 是否支持转发卡片的交互。默认值 false
  style? : any; // 添加自定义字号和颜色 TODO: 待补充
  constructor() {
  }

  withSummary(summary: Summary) {
    this.summary = summary;
    return this;
  }

  withStreamingMode(streaming_mode: boolean) {
    this.streaming_mode = streaming_mode;
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
}
