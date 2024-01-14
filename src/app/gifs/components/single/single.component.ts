import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/search-response';

@Component({
  selector: 'gifs-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent implements OnInit {

  /* home -> service con el listad -> card input -> single input */
  @Input()
  public gif!:Gif;

  /* oninit se ejecuta cuando el componente esta cargando */
  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
  }
}
