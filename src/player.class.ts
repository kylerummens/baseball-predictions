export interface IPlayer {
    player_id: string;
    name: string;
    dob: Date;
}

export class Player implements IPlayer {
    player_id: string;
    name: string;
    dob: Date;

    constructor(obj: IPlayer) {
        this.player_id = obj.player_id;
        this.name = obj.name;
        this.dob = obj.dob;
    }
}