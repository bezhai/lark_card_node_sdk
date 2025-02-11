import { BaseClass } from './json';

export class StandardIcon extends BaseClass {
  private readonly tag: 'standard_icon' = 'standard_icon';
  private token: string;
  private color: string;
  constructor(token: string, color: string) {
    super();
    this.token = token;
    this.color = color;
  }
}

export class CustomIcon extends BaseClass {
  private readonly tag: 'custom_icon' = 'custom_icon';
  private img_key: string;
  constructor(img_key: string) {
    super();
    this.img_key = img_key;
  }
}

export type Icon = StandardIcon | CustomIcon;
