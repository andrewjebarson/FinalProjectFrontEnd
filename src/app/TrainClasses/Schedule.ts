import { Seat } from "./Seat";

export class Schedule{
    constructor(public scheduleId:any,public departureDate:any,public arrivalDate:any,public fromStation:string,public toStation:string,public journeyHours:number,public seats:Seat[]){}
}