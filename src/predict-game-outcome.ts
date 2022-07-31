import { Game } from "./game.class";
import { Team } from "./team.class";

export async function predictGameOutcome(
    home_team: Team,
    away_team: Team,
    game: Game
) {

    const [
        home_win_percent,
        away_win_percent
    ] = await Promise.all([
        getTeamWinPercent(home_team, game, 'Home'),
        getTeamWinPercent(away_team, game, 'Away')
    ])

    if (home_win_percent > away_win_percent) {
        console.log('\n---------------------');
        console.log(home_team.name);
        console.log('');
        console.log('Home percent: ' + home_win_percent);
        console.log('Away percent: ' + away_win_percent);
        console.log('---------------------\n');
    }
    else if(away_win_percent > home_win_percent) {
        console.log('\n---------------------');
        console.log(away_team.name);
        console.log('');
        console.log('Home percent: ' + home_win_percent);
        console.log('Away percent: ' + away_win_percent);
        console.log('---------------------\n');
    }
    else {
        console.log('Percentages are equal. No bet.');
    }

}

async function getTeamWinPercent(team: Team, game: Game, home_v_away: 'Home' | 'Away'): Promise<number> {
    return Math.random();
}