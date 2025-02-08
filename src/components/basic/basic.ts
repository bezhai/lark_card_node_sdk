import { BaseClass } from "../../common/json";

// 移除复杂的类型定义，改用简单的字符串类型
export type ValidIdentifier = string;

/**
 * @interface ElementId
 * @summary 组件唯一标识接口
 * @description 定义组件的唯一标识符，用于在组件相关接口中唯一识别和引用特定组件
 *
 * @property {ValidIdentifier} element_id - 组件的唯一标识符
 *
 * @remarks
 * 标识符规则：
 * - 必须以字母开头
 * - 只能包含字母、数字和下划线
 * - 长度不得超过20个字符
 * - 在同一张卡片内必须唯一
 *
 * @example
 * ```typescript
 * const elementId: ElementId = {
 *   element_id: "myButton123"
 * };
 * ```
 */
export class BaseComponent extends BaseClass {
  element_id: ValidIdentifier;

  constructor(element_id: ValidIdentifier) {
    super();
    this.validateElementId(element_id);
    this.element_id = element_id;
  }

  private validateElementId(id: string): void {
    if (!id.match(/^[a-zA-Z][a-zA-Z0-9_]{0,19}$/)) {
      throw new Error(
        "元素ID必须以字母开头，只能包含字母、数字和下划线，长度不超过20个字符"
      );
    }
  }
}