import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
//F:\Projects\snapmap\src\app\app.module.ts

@Component({
  selector: 'app-textbooklist',
  templateUrl: './textbooklist.component.html',
  styleUrls: ['./textbooklist.component.scss']
})
export class TextbooklistComponent implements OnInit {
	book:string[] = [];
  constructor(public dialog:MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  	this.book.push('let us c');
  	this.book.push('Unix');

  }

}
