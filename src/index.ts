import * as puppeteer from 'puppeteer';

(async () => {

    const date = new Date('April 9, 2022');

    const team = { code: 'SFN' };

    const month = date.getMonth() + 1;

    let date_string = date.getFullYear().toString()
        + (month < 10 ? '0' + month.toString() : month.toString())
        + (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString())
        + '0';

    const game_url = `https://www.baseball-reference.com/boxes/${team.code}/${team.code}${date_string}.shtml`;

    console.log(date);
    console.log(date_string);
    console.log(game_url);

})();