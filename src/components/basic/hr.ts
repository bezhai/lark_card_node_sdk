import { PxValue } from '../../common/style';
import { BaseComponent } from './basic';

export class HrComponent extends BaseComponent {
  private readonly tag: 'hr' = 'hr';
  private margin?: PxValue;

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }
}
