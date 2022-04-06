import SplitTextEditing from './splittextediting';
import SplitTextUI from './splittextui';
import { Plugin } from 'ckeditor5/src/core';

export default class SplitText extends Plugin {
  static get requires() {
    return [SplitTextEditing, SplitTextUI];
  }
}
