import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snapmap';
  constructor(private route:Router){}

  viewpdf(){
  	this.route.navigate(['/view']);
  	console.log("route");
  }
}
