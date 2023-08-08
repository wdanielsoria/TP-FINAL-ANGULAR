import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input('delay') Delay:string = '';
  @Input('titulo') Titulo:string = '';
  @Input('texto') Texto:string = '';
  @Input('icono') Icono:string = '';
  @Input('id') id: number = 0;

  constructor(){ }

  ngOnInit(): void {
    //console.log(this.Titulo, this.Texto);
  }
}
