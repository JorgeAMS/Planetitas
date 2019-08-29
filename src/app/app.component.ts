import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jorge\'s Test';




  planetas:any = [
    {nombre: 'Mercurio',  distancia:'57,91 millones',           lunas:0,    masa:'3.303e+23 Kg',  anillos:2, tipo:'Rocoso'},
    {nombre: 'Venus',     distancia:'108,2 millones',           lunas:0,    masa:'4.869e+24 Kg',  anillos:2, tipo:'Rocoso'},
    {nombre: 'Tierra',    distancia:'149,6 millones',           lunas:1,    masa:'5.976e+24 Kg',  anillos:2, tipo:'Rocoso'},
    {nombre: 'Marte',     distancia:'227,9 millones',           lunas:2,    masa:'6.421e+23 Kg',  anillos:2, tipo:'Rocoso'},
    {nombre: 'Júpiter',   distancia:'778,5 millones',           lunas:63,   masa:'1.9e+27 Kg',    anillos:1, tipo:'Gaseoso'},
    {nombre: 'Saturno',   distancia:'1,444 miles de millones',  lunas:62,   masa:'5.688e+26 Kg',  anillos:1, tipo:'Gaseoso'},
    {nombre: 'Urano',     distancia:'2,871 miles de millones',  lunas:27,   masa:'8.686e+25 Kg',  anillos:1, tipo:'Gaseoso'},
    {nombre: 'Neptuno',   distancia:'4,495 miles de millones',  lunas:13,   masa:'1.024e+26 Kg',  anillos:1, tipo:'Gaseoso'},
  ]
}
