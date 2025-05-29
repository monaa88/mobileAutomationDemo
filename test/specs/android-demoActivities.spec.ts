describe("Android demo activities", () => {
  it("should open the 'app' activity", async () => {
    //Access acitivity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await driver.pause(2000);

    await expect($('//*[@text="App/Alert Dialogs"]')).toBeDisplayed();
  });

  it("vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextToView("Secure Surfaces")'
    );
    await expect($("~Secure Surfaces")).toBeDisplayed();
    await $("~Secure Surfaces").click();

    await expect($("~Secure Dialog")).toExist();
  });
});
