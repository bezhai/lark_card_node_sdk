import { CornerRadiusType } from '@common/style';
import { PlainText } from '@common/text';
import { BaseComponent } from '@basic/basic';

type ScaleType =
  | 'crop_center' // 居中裁剪模式
  | 'crop_top' // 顶部裁剪模式
  | 'fit_horizontal'; // 完整展示不裁剪

type ImgSize =
  | 'large' // 大图，尺寸为 160 × 160，适用于多图混排
  | 'medium' // 中图，尺寸为 80 × 80，适用于图文混排的封面图
  | 'small' // 小图，尺寸为 40 × 40，适用于人员头像
  | 'tiny' // 超小图，尺寸为 16 × 16，适用于图标、备注
  | 'stretch' // 超大图，适用于高宽比小于 16:9 的图片
  | 'stretch_without_padding' // 通栏图，适用于高宽比小于 16:9 的图片，图片的宽度将撑满卡片宽度
  | `${number}px ${number}px`;

export class ImgComponent extends BaseComponent {
  private readonly tag: 'img'; // 固定值 "img"

  private img_key: string; // 图片的 Key，必填

  private alt: PlainText; // 悬浮说明，必填

  private title?: PlainText; // 图片标题，选填

  private corner_radius?: CornerRadiusType; // 图片的圆角半径

  private scale_type?: ScaleType; // 图片的裁剪模式，选填，默认为 crop_center

  private size?: ImgSize; // 图片尺寸，选填，仅在 scale_type 为 crop_center 或 crop_top 时生效

  private transparent?: boolean; // 是否为透明底色，选填，默认值为 false

  private preview?: boolean; // 点击后是否放大图片，选填，默认值为 true

  // 历史属性
  private mode?: 'large' | 'medium' | 'small' | 'tiny' | 'stretch' | 'stretch_without_padding'; // 图片尺寸模式，历史属性，选填

  private custom_width?: number; // 自定义图片的最大展示宽度，选填

  private compact_width?: boolean; // 是否展示为紧凑型图片，选填

  constructor(img_key: string) {
    super();
    this.tag = 'img';
    this.alt = new PlainText('');
    this.img_key = img_key;
  }

  setTitle(title: string) {
    this.title = new PlainText(title);
    return this;
  }

  setAlt(alt: string) {
    this.alt;
    return this;
  }

  setCornerRadius(corner_radius: CornerRadiusType) {
    this.corner_radius = corner_radius;
    return this;
  }

  setScaleType(scale_type: 'crop_center' | 'crop_top' | 'fit_horizontal') {
    this.scale_type = scale_type;
    return this;
  }

  setSize(size: ImgSize) {
    this.size = size;
    return this;
  }

  setTransparent(transparent: boolean) {
    this.transparent = transparent;
    return this;
  }

  setPreview(preview: boolean) {
    this.preview = preview;
    return this;
  }
}
