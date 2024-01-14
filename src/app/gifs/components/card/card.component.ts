import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/search-response';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public gifs: Gif[] = [];

  constructor(private gifsService: GifsService) {}
}
