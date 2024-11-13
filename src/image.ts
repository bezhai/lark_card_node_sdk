import { PlainText } from "./text";

// 定义 ImgComponent 接口
export class ImgComponent {
  tag: "img"; // 固定值 "img"

  img_key: string; // 图片的 Key，必填

  alt: PlainText; // 悬浮说明，必填

  title?: PlainText; // 图片标题，选填

  corner_radius?: string; // 图片的圆角半径，单位是像素（px），选填

  scale_type?: "crop_center" | "crop_top" | "fit_horizontal"; // 图片的裁剪模式，选填，默认为 crop_center

  size?: string; // 图片尺寸，选填，仅在 scale_type 为 crop_center 或 crop_top 时生效

  transparent?: boolean; // 是否为透明底色，选填，默认值为 false

  preview?: boolean; // 点击后是否放大图片，选填，默认值为 true

  // 历史属性
  mode?:
    | "large"
    | "medium"
    | "small"
    | "tiny"
    | "stretch"
    | "stretch_without_padding"; // 图片尺寸模式，历史属性，选填

  custom_width?: number; // 自定义图片的最大展示宽度，选填

  compact_width?: boolean; // 是否展示为紧凑型图片，选填

  constructor(img_key: string, alt: string) {
    this.tag = "img";
    this.alt = new PlainText(alt);
    this.img_key = img_key;
  }
}
