const { Builder, By , Browser} = require('selenium-webdriver');

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


        const element = await driver.findElement(By.id('sb_form_q'));
        await element.sendKeys('New Tech News');
        await element.submit();
        console.log("Searching And Sleeping ...")
        await driver.sleep(3000);

    } finally {
        await driver.quit();
    }
})();

