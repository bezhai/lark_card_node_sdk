import { CardElement } from "../element";

export interface ElementId {
  element_id: string;
}

export type CardElementV2 = CardElement & ElementId;

export function withElementId(element: CardElementV2, element_id: string): CardElementV2 {
  element.element_id = element_id;
  return element;
}