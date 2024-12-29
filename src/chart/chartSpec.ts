import { LegendOrient, LegendPosition } from "../common/style";

export interface ChartSpecLegend {
  orient: LegendOrient;
  position: LegendPosition;
  visible?: boolean;  
}

export class ChartSpec {
  type: string;
  title: {
    text: string;
  };
  data: {
    values: Array<{ [key: string]: any }>;
  };
  label?: {
    visible?: boolean;
  };
  legends?: ChartSpecLegend;

  constructor(
    type: string,
    title: { text: string },
    label?: {
      visible?: boolean;
    },
    legends?: { orient: LegendOrient; position: LegendPosition; visible?: boolean }
  ) {
    this.type = type;
    this.title = title;
    this.data = { values: [] };
    this.label = label;
    this.legends = legends;
  }

  protected addData(data: { [key: string]: any }) {
    this.data.values.push(data);
  }
}