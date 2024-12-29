import { ChartSpec } from "./chartSpec";

export class WordCloudChartSpec extends ChartSpec {
  nameField: string;
  valueField: string;
  seriesField: string;

  constructor(
    title: { text: string },
    nameField: string,
    valueField: string,
    seriesField: string
  ) {
    super("wordCloud", title);
    this.nameField = nameField;
    this.valueField = valueField;
    this.seriesField = seriesField;
  }

  /**
   * 添加词汇
   */
  addWordCloudData(name: string, value: number): void {
    const dataPoint: { [key: string]: any } = {
      [this.nameField]: name,
      [this.valueField]: value,
    };

    this.addData(dataPoint);
  }
}
