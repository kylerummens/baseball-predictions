export interface IGameHittingStat {

    game_id: string;
    player_id: string;

    at_bat: number;
    runs_scored: number;
    hits: number;
    rbi: number;
    walks: number;
    strike_outs: number;
    plate_appearances: number;
    average: number;
    obp: number;
    slg: number;
    ops: number;
    pitches_seen: number;
    strikes: number;
    win_probability: number;
    average_leverage_index: number;
    win_probability_added: number;
    win_probability_subtracted: number;
    championship_win_probability_added: number;
    average_championship_leverage_index: number;
    base_out_runs_added: number;
    put_outs: number;
    assists: number;
    details: string;
}

export class GameHittingStat implements IGameHittingStat {

    game_id: string;
    player_id: string;

    at_bat: number;
    runs_scored: number;
    hits: number;
    rbi: number;
    walks: number;
    strike_outs: number;
    plate_appearances: number;
    average: number;
    obp: number;
    slg: number;
    ops: number;
    pitches_seen: number;
    strikes: number;
    win_probability: number;
    average_leverage_index: number;
    win_probability_added: number;
    win_probability_subtracted: number;
    championship_win_probability_added: number;
    average_championship_leverage_index: number;
    base_out_runs_added: number;
    put_outs: number;
    assists: number;
    details: string;

    constructor(obj: IGameHittingStat) {
        this.game_id = obj.game_id;
        this.player_id = obj.player_id;
        this.at_bat = obj.at_bat;
        this.runs_scored = obj.runs_scored;
        this.hits = obj.hits;
        this.rbi = obj.rbi;
        this.walks = obj.walks;
        this.strike_outs = obj.strike_outs;
        this.plate_appearances = obj.plate_appearances;
        this.average = obj.average;
        this.obp = obj.obp;
        this.slg = obj.slg;
        this.ops = obj.ops;
        this.pitches_seen = obj.pitches_seen;
        this.strikes = obj.strikes;
        this.win_probability = obj.win_probability;
        this.average_leverage_index = obj.average_leverage_index;
        this.win_probability_added = obj.win_probability_added;
        this.win_probability_subtracted = obj.win_probability_subtracted;
        this.championship_win_probability_added = obj.championship_win_probability_added;
        this.average_championship_leverage_index = obj.average_championship_leverage_index;
        this.base_out_runs_added = obj.base_out_runs_added;
        this.put_outs = obj.put_outs;
        this.assists = obj.assists;
        this.details = obj.details;
    }
}