import { Detail } from "../TrainClasses/Detail";
import { Schedule } from "../TrainClasses/Schedule";
import { Seat } from "../TrainClasses/Seat";

export default class bookingRequest{
    constructor(
        public trainId:any,public train:Detail,public schedule:Schedule,public category:Seat
    ){}
}