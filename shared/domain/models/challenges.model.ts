export class Challenge {
    public type: string;
    public description: string;
    public amount: number;

    constructor(init: Challenge) {
        this.type = init.type
        this.description = init.description
        this.amount = init.amount
    }
}