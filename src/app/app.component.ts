import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rutas:string[] = ['/Cronómetro', '/Saludo']

  constructor(private router:Router){

  }
  cambiarRuta(){
    let numAleatorio = Math.floor(Math.random()*this.rutas.length);
     this.router.navigate([this.rutas[numAleatorio]])
  }
  title = 'Examen-MateoLA';
}