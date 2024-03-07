import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  entrarSaludo:number=0;
 
  valor:number=0;
  if(): void{
    this.valor++;
  }
  

}
