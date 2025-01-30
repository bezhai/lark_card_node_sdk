import { PxValue } from "../../common/style";

export class HrComponent {
  tag: "hr" = "hr";
  margin?: PxValue;

  setMargin(margin: PxValue) {
    this.margin = margin;
    return this;
  }
}
