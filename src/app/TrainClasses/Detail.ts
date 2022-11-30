import { Schedule } from "./Schedule";

import { Station } from "./Station";

export class Detail{
    
    constructor(public trainId:number,public trainName:String,public basePrice:number,public schedules:Schedule[],public stations:Station[]){}
}