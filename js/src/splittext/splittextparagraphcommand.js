import { Command } from 'ckeditor5/src/core';

export default class SplitTextParagraphCommand extends Command {
  execute() {
    const { model } = this.editor;
    model.change((writer) => {
      // model.insertContent(createSimpleBox(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'splitText',
    );

    this.isEnabled = allowedIn !== null;
  }
}
