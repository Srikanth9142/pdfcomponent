import { Component, OnInit,Input } from '@angular/core';
import {Book} from 'src/app/models/Book';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allbooks:Book[]=[];
  bookmap=new Map();
  constructor() { }

  ngOnInit() {
    this.allbooks.push(new Book(1,"let us c","yashwanth","computer science"));
    this.allbooks.push(new Book(2,"Java the complete Reference","Herbert schildt","computer science"));
    this.allbooks.push(new Book(3,"secret","rhonda rhyne","general"));
    console.log("length: "+this.allbooks.length);
    this.allbooks.forEach((book)=>{
      this.bookmap.set(book.bid,book);
    });
    console.log(this.bookmap.get(2).name);
    for(let key of this.bookmap.keys()){
      console.log(key+" "+this.bookmap.get(key).name);
    }
  }

}
