import * as puppeteer from 'puppeteer';
import { Game } from '../models/game.class';
import { Team } from '../models/team.class';

export async function scrapeGame(team: Team, date: Date) {

    const month = date.getMonth() + 1;

    let date_string = date.getFullYear().toString()
        + (month < 10 ? '0' + month.toString() : month.toString())
        + (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString())
        + '0';

    const game_url = `https://www.baseball-reference.com/boxes/${team.game_code}/${team.game_code}${date_string}.shtml`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(game_url);

    const start_time_weather_ref = await page.$('#div_7378766429 > div:nth-child(5)');
    const start_time_weather = (await (await start_time_weather_ref?.getProperty('textContent'))?.jsonValue<string>())?.trim().replace('Start Time Weather: ', '').split(',')!
    const start_time_temperature = start_time_weather[0].trim().replace('° F', '');
    const start_time_conditions = '';

    const day_or_night_ref = await page.$('.scorebox_meta > div:nth-child(6)');
    const day_or_night = (await (await day_or_night_ref?.getProperty('textContent'))?.jsonValue<string>())?.trim().split(',')[0].trim() === 'Day Game' ? 'D' : 'N';

    console.log(start_time_weather + ' F');
    console.log(day_or_night);

    await browser.close();

}