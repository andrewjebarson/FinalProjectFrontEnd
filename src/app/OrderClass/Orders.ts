import PassengerDetails from "./PassengerDetails";

export default class Orders{
    constructor(public orderId:any,
        public vechileId:any,
        public vechileName:any,
        public userId:any,
        public noOfSeats:number,
        public passengerDetails:PassengerDetails[],
        public sourcePlace:string,
        public destinationPlace:string,
        public totalFare:number,
        public status:string,
        public orderDate:Date,
        public travelDate:Date,
        public category:string

        ){}
}