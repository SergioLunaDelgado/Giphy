import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.css'
})
export class LazyComponent implements OnInit{
  @Input()
  public url!:string;
  @Input() 
  public alt:string = '';

  public hasLoaded: boolean = false; 

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required')
  }

  onLoad(){
    this.hasLoaded = true;
  }
}
