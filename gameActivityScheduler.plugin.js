/**
 * @name gameActivityScheduler
 * @author soapyboat
 * @authorId 219534600135770113
 * @description Sets the user's game activity based on a pre-defined window of time
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
        console.log(UserSettingsProtoStore.settings.status.showCurrentGame.value);
    }
};