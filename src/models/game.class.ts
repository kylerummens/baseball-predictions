export interface IGame {

    game_id: string;

    date: Date;

    day_or_night: 'D' | 'N';
    /**
     * Recorded temperature at the home team zip code on day of game
     * Measured in Fahrenheit
     */
    temperature: number;
    /**
     * Raining, cloudy, sunny, etc.
     */
    weather_condition: string;

    home_team_id: string;
    away_team_id: string;

    home_team_runs: number;
    away_team_runs: number;

    home_team_runs_allowed: number;
    away_team_runs_allowed: number;

    /**
     * Number of minutes
     */
    duration: number;
}

export class Game implements IGame {
    game_id: string;
    date: Date;
    day_or_night: 'D' | 'N';
    temperature: number;
    weather_condition: string;
    home_team_id: string;
    away_team_id: string;
    home_team_runs: number;
    away_team_runs: number;
    home_team_runs_allowed: number;
    away_team_runs_allowed: number;
    duration: number;

    constructor(obj: IGame) {
        this.game_id = obj.game_id;
        this.date = obj.date;
        this.day_or_night = obj.day_or_night;
        this.temperature = obj.temperature;
        this.weather_condition = obj.weather_condition;
        this.home_team_id = obj.home_team_id;
        this.away_team_id = obj.away_team_id;
        this.home_team_runs = obj.home_team_runs;
        this.away_team_runs = obj.away_team_runs
        this.home_team_runs_allowed = obj.home_team_runs_allowed;
        this.away_team_runs_allowed = obj.away_team_runs_allowed;
        this.duration = obj.duration;
    }
    
}