export class AddNoteScreen {
  get skipButton() {
    return $(
      '//*resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_skip"'
    );
  }

  get noteText() {
    return $('//*[@text="Notes"]');
  }
}
