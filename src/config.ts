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
  width?: "wide" | "default" | "full" = "wide"; // 卡片宽度，窄版："default"，宽版："wide"，全屏："full"
  constructor(wide_screen_mode: boolean, enable_forward: boolean) {
    this.wide_screen_mode = wide_screen_mode;
    this.enable_forward = enable_forward;
  }
}
