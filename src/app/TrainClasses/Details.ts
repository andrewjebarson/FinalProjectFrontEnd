import { Schedule } from "./Schedule";
import { Seats } from "./Seats";
import { Stations } from "./Stations";

export class Details{
    
    constructor(public trainId:number,public trainName:String,public basePrice:number,public schedule:Schedule[],public seats:Seats[],public station:Stations[]){}
}