import { User } from "./User";

export class Response{
    constructor(public user:User,public token:String){}
}