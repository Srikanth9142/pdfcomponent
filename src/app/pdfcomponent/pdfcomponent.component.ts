import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-pdfcomponent',
  templateUrl: './pdfcomponent.component.html',
  styleUrls: ['./pdfcomponent.component.scss']
})
export class PdfcomponentComponent implements OnInit {
  link:String;
  pdfblob:Blob;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    

    this.dataservice.getpdf().subscribe(x=>{
      this.pdfblob = new Blob([x],{type:"application/pdf"});
      console.log(this.pdfblob);
    });
  }

}
