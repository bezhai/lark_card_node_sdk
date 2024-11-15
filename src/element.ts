import { ColumnSet } from "./column";
import { DivComponent } from "./div";
import { ImgComponent } from "./image";
import { MarkdownComponent } from "./markdown";

export type CardElement = ImgComponent | ColumnSet | DivComponent | MarkdownComponent;

export type ColumnElement = ImgComponent | DivComponent | MarkdownComponent;
