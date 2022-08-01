export interface IGamePitchingStat {

    game_id: string;
    player_id: string;
    innings_pitched: number;
    hits_allowed: number;
    runs_scored: number;
    earned_runs_allowed: number;
    walks: number;
    strike_outs: number;
    home_runs: number;
    earned_run_average: number;
    batters_faced: number;
    pitches: number;
    strikes: number;
    strikes_by_contact: number;
    strikes_swinging: number;
    strikes_looking: number;
    ground_balls: number;
    fly_balls: number;
    line_drives: number;
    unknown_balls: number;
    game_score: number;
    inherited_runners: number;
    inherited_score: number;
    win_probability_by_pitcher: number;
    average_leverage_index: number;
    championship_win_probability: number;
    average_championship_leverage_index: number;
    base_out_runs_saved: number;
}

export class GamePitchingStat implements IGamePitchingStat {

    game_id: string;
    player_id: string;
    innings_pitched: number;
    hits_allowed: number;
    runs_scored: number;
    earned_runs_allowed: number;
    walks: number;
    strike_outs: number;
    home_runs: number;
    earned_run_average: number;
    batters_faced: number;
    pitches: number;
    strikes: number;
    strikes_by_contact: number;
    strikes_swinging: number;
    strikes_looking: number;
    ground_balls: number;
    fly_balls: number;
    line_drives: number;
    unknown_balls: number;
    game_score: number;
    inherited_runners: number;
    inherited_score: number;
    win_probability_by_pitcher: number;
    average_leverage_index: number;
    championship_win_probability: number;
    average_championship_leverage_index: number;
    base_out_runs_saved: number;

    constructor(obj: IGamePitchingStat) {
        this.game_id = obj.game_id;
        this.player_id = obj.player_id;
        this.innings_pitched = obj.innings_pitched;
        this.hits_allowed = obj.hits_allowed;
        this.runs_scored = obj.runs_scored;
        this.earned_runs_allowed = obj.earned_runs_allowed;
        this.walks = obj.walks;
        this.strike_outs = obj.strike_outs;
        this.home_runs = obj.home_runs;
        this.earned_run_average = obj.earned_run_average;
        this.batters_faced = obj.batters_faced;
        this.pitches = obj.pitches;
        this.strikes = obj.strikes;
        this.strikes_by_contact = obj.strikes_by_contact;
        this.strikes_swinging = obj.strikes_swinging;
        this.strikes_looking = obj.strikes_looking;
        this.ground_balls = obj.ground_balls;
        this.fly_balls = obj.fly_balls;
        this.line_drives = obj.line_drives;
        this.unknown_balls = obj.unknown_balls;
        this.game_score = obj.game_score;
        this.inherited_runners = obj.inherited_runners;
        this.inherited_score = obj.inherited_score;
        this.win_probability_by_pitcher = obj.win_probability_by_pitcher;
        this.average_leverage_index = obj.average_leverage_index;
        this.championship_win_probability = obj.championship_win_probability;
        this.average_championship_leverage_index = obj.average_championship_leverage_index;
        this.base_out_runs_saved = obj.base_out_runs_saved;
    }

}