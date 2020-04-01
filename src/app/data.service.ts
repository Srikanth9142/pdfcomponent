import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getpdf():Observable<Blob>{
    console.log("fetching drive");
    return this.http.get('https://drive.google.com/uc?id=14r_7BfQxGipntMUuJZpyTE8pxgA7cGuX',
      {responseType:'blob'});
    
  }
  // getpdff():Observable<Blob>{
  //   return from(
  //     fetch(
  //       'https://drive.google.com/uc?id=14r_7BfQxGipntMUuJZpyTE8pxgA7cGuX',
  //       {
  //         headers:{
  //           'Content-Type':'application/pdf',
  //         },
  //         method:'GET',
  //         mode:'no-cors'
  //       }
  //     )
  //   );
  // }
}
