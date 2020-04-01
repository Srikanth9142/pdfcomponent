export class Book {
    bid:number;
    name:String;
    author:String;
    category:String;
    constructor(bid:number,name:String,author:String,category:String) {
        this.bid = bid;
        this.name = name;
        this.author = author;
        this.category = category;
    }
}