import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/class/RickMorty.model';

@Component({
  selector: 'rm-card',
  templateUrl: './rm-card.component.html',
  styleUrls: ['./rm-card.component.scss']
})
export class RmCardComponent implements OnInit {

  @Input() data: Character;
  @Output() eventMouseEnter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
    this.data = {};
  }

  ngOnInit(): void {
  }

  ejecutarMouseEnter(elemento: Character): void{
    this.eventMouseEnter.emit(elemento);
  }

}
