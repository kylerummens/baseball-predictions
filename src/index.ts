import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baseball-reference.com/boxes/NYA/NYA202204080.shtml');
    
    const game_metadatas = await page.$$('.scorebox_meta');

    if(game_metadatas.length) {
        const game_metadata = game_metadatas[0];

        const items = await game_metadata.$$('div');

        for(const item of items) {
            await item.evaluate(node => {
                console.log('1');
                console.log('1', node);
            }).then(res => {
                console.log(res);
            })
        }

    }
    else {
        console.log('No metadata found');
    }

    await browser.close();
})();