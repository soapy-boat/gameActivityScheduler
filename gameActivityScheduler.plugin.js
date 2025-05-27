/**
 * @name gameActivityScheduler
 * @author soapyboat
 * @authorId 219534600135770113
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

const { Webpack } = BdApi;
const UserSettingsProtoStore = Webpack.getStore("UserSettingsProtoStore");
module.exports = class gameActivityScheduler {
    start() {
        this.checkInterval = setInterval(() => this.checkTimeAndToggle(), 10000);
        this.checkTimeAndToggle(); // initial check
    }

    stop() {
        clearInterval(this.checkInterval);
    }

    checkTimeAndToggle() {
        const now = new Date();
        const hour = now.getHours();

        const shouldBeVisible = (hour >= 17);
        console.log(`game activity should be visible: ${shouldBeVisible}`);
        this.setGameActivityVisibility(shouldBeVisible);  //default 5pm-midnight
    }

    setGameActivityVisibility(enable) {
        const UserSettings = BdApi.findModuleByProps("updateRemoteSettings");
        console.log(UserSettingsProtoStore.settings.status.showCurrentGame.value);
        UserSettingsProtoStore.settings.status.showCurrentGame.value = false;
        console.log(UserSettingsProtoStore.settings.status.showCurrentGame.value);
    }
};