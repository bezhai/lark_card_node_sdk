import { ChartSpec } from './chartSpec'; // Keep as non-type import since we extend from it

export class WordCloudChartSpec extends ChartSpec {
  private nameField: string;
  private valueField: string;
  private seriesField: string;

  constructor(title: { text: string }, nameField: string, valueField: string, seriesField: string) {
    super('wordCloud', title);
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
