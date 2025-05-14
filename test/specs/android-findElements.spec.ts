describe("Android find elements", () => {
  it("Should find elements by accessibility id", async () => {
    const appOption = await $("~App");
    await appOption.click();
    const actionBar = await $("~Action Bar");
    const actionBarText = await actionBar.getText();
    expect(actionBar).toBeExisting();
  });

  it("Finding multiple elements", async () => {
    const testList = await $$("android.widget.TextView");
    for (const test of testList) {
      const testText = await test.getText();
      console.log(testText);
      expect(test).toBeExisting();
    }
  });
});
