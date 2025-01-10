import type { ActionElement } from "./element";

type LayoutType =
  | "bisected" // 二等分布局
  | "trisection" // 三等分布局
  | "flow"; // 流式布局

export class ActionComponent {
  tag: "action" = "action";
  actions: ActionElement[] = [];
  layout?: LayoutType;

  addAction(action: ActionElement) {
    this.actions.push(action);
  }

  setLayout(layout: LayoutType) {
    this.layout = layout;
    return this;
  }
}