import { AddNoteScreen } from "./screenObjects/android/add-note.screen";

describe("Notes app", () => {
  it("Skip a tutorial", async () => {
    const addNotesScreen = new AddNoteScreen();
    await addNotesScreen.skipButton.click();
    await expect($('//*[@text="Notes"]')).toBeDisplayed();
  });

  it("Add a note", async () => {
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();

    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    await $(
      '//*resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"'
    ).setValue("This is a test note");

    await $(
      '//*resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"'
    ).setValue("This is a test note body");

    //Save the note
    await driver.back();
    await driver.back();

    await expect(
      $(
        '//*resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"'
      )
    ).toBeDisplayed();
    await expect(
      $(
        '//*resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"'
      )
    ).toHaveText("This is a test note body");
  });
});
