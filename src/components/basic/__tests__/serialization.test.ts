import { DivComponent, DivText } from '../div';

describe('Component Serialization', () => {
  describe('DivComponent', () => {
    test('should serialize basic div component', () => {
      const divText = new DivText('plain_text', '测试文本');
      const div = new DivComponent('testDiv', divText);
      
      expect(div.toJSON()).toEqual({
        tag: 'div',
        element_id: 'testDiv',
        text: {
          tag: 'plain_text',
          content: '测试文本',
          text_align: 'left',
          text_size: 'normal',
          text_color: 'default'
        }
      });
    });

    test('should serialize div component with full properties', () => {
      const divText = new DivText('plain_text', '测试文本');
      divText.setTextAlign('center');
      divText.setTextColor('red');
      divText.setTextSize('large');
      divText.setLines(2);

      const div = new DivComponent('testDiv', divText);
      
      expect(div.toJSON()).toEqual({
        tag: 'div',
        element_id: 'testDiv',
        text: {
          tag: 'plain_text',
          content: '测试文本',
          text_align: 'center',
          text_size: 'large',
          text_color: 'red',
          lines: 2
        }
      });
    });

    test('should serialize div component with markdown text', () => {
      const divText = new DivText('lark_md', '**粗体文本**');
      const div = new DivComponent('testDiv', divText);
      
      expect(div.toJSON()).toEqual({
        tag: 'div',
        element_id: 'testDiv',
        text: {
          tag: 'lark_md',
          content: '**粗体文本**',
          text_align: 'left',
          text_size: 'normal',
          text_color: 'default'
        }
      });
    });
  });
}); 