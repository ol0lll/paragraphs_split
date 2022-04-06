import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../icons/splittext.svg';

export default class SplitTextUI extends Plugin {
  init() {

    const editor = this.editor;

    editor.ui.componentFactory.add('splitText', (locale) => {
      const command = editor.commands.get('splitTextParagraph');
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: editor.t('Split Text'),
        icon,
        tooltip: true
      });

      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      this.listenTo(buttonView, 'execute', () => editor.execute('splitTextParagraph'));

      return buttonView;
    })
  }
}
