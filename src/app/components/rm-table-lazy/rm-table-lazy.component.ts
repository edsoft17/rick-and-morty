import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Character } from 'src/app/class/RickMorty.model';

@Component({
  selector: 'rm-table-lazy',
  templateUrl: './rm-table-lazy.component.html',
  styleUrls: ['./rm-table-lazy.component.scss']
})
export class RmTableLazyComponent implements OnInit {

  @Output() eventLazyLoad: EventEmitter<any> = new EventEmitter<any>();
  @Input() data: Character[] = [];
  @Input() totalRecords!: number;
  @Input() loadingCharacters: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  emitEventLazy(event: LazyLoadEvent): void {
    this.eventLazyLoad.emit(event);
  }
}
