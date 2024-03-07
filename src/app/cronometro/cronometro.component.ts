import { Component } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  valor:number=0;
  async contador(){
    this.valor=0;
    if(this.valor == this.valor){
      await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    }   
  }
  stop(){
    this.contador();
  }
}
