export interface ITeam {
    team_id: string;
    name: string;
    location_name: string;
    latitude: number;
    longitude: number;
}

export class Team implements ITeam {
    team_id: string;
    name: string;
    location_name: string;
    latitude: number;
    longitude: number;

    constructor(obj: ITeam) {
        this.team_id = obj.team_id;
        this.name = obj.name;
        this.location_name = obj.location_name;
        this.latitude = obj.latitude;
        this.longitude = obj.longitude;
    }
}