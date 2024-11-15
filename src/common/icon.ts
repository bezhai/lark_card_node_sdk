export class StandardIcon {
  tag: "standard_icon";
  token: string;
  color: string;
  constructor(token: string, color: string) {
    this.tag = "standard_icon";
    this.token = token;
    this.color = color;
  }
}

export class CustomIcon {
  tag: "custom_icon";
  img_key: string;
  constructor(img_key: string) {
    this.tag = "custom_icon";
    this.img_key = img_key;
  }
}

export type Icon = StandardIcon | CustomIcon;
