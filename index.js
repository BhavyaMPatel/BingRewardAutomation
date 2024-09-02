import { Builder,By,Browser } from "selenium-webdriver";
import RandomQuery from "./RandomQuery.js";

(async () => {
    const driver = await new Builder().forBrowser(Browser.EDGE).build();
    try {

        /* Browser Open And Login Back Using Cookie*/
        await driver.get('https://bing.com');
        await driver.sleep(5000);
        await driver.get('https://rewards.bing.com/');
        await driver.sleep(5000);
        await driver.get('https://bing.com');
        await driver.sleep(5000);
        /* */


        let element = await driver.findElement(By.id('sb_form_q'));
        await element.sendKeys('Update Password For NPM');
        await element.submit();
        await driver.sleep(3000);
        console.log("Searching And Sleeping ...")

        element = await driver.findElement(By.id('sb_form_q'));
        await driver.sleep(1000);
        element.clear();
        await driver.sleep(3000);
        await element.sendKeys('Surat Indian Post HO');
        await element.submit();
        await driver.sleep(3000);

    } finally {
        console.log("QUTI PASS");
        await driver.quit();
    }
})();



