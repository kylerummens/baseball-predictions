export interface ITeam {
    team_id: string;
    name: string;
    game_code: string;
    page_code: string;
    location_name: string;
    latitude: number;
    longitude: number;
}

export class Team implements ITeam {
    team_id: string;
    name: string;
    game_code: string;
    page_code: string;
    location_name: string;
    latitude: number;
    longitude: number;

    constructor(obj: ITeam) {
        this.team_id = obj.team_id;
        this.name = obj.name;
        this.game_code = obj.game_code;
        this.page_code = obj.page_code;
        this.location_name = obj.location_name;
        this.latitude = obj.latitude;
        this.longitude = obj.longitude;
    }
}