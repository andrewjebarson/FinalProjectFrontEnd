export class Schedule{
    constructor(public scheduleId:any,public departureDate:Date,public arrivalDate:Date,public fromStation:string,public toStation:string,public journeyHours:number){}
}