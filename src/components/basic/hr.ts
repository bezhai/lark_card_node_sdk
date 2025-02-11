import { PxValue } from '../../common/style';
import { BaseComponent } from './basic';

export class HrComponent extends BaseComponent {
  tag: 'hr' = 'hr';
  margin?: PxValue;

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }
}
