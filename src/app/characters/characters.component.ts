import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs'
import { Character } from '../class/RickMorty.model';
import { ResponseModel } from '../class/response.model';
import { RickMortyService } from '../services/rick-morty.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';

interface FilterRickMorty {
  name: string,
  code: number
}

interface FilterCount {
    name: string,
    code: number
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  totalRecords: number = 0;
  selectedFilterTableCard!: number;
  loadingCharacters: boolean = false;

  valueName: string = "";

  loadingCharacter: boolean = false;

  disabledModeVisualitazion: boolean = false;

  filterRick: FilterRickMorty[];
  filterCount!: FilterRickMorty[];
  selectedFilterRick!: FilterRickMorty;
  selectedFilterCount!: FilterRickMorty;

  characters: Character[] = [];

  responsiveOptions: any[];

  constructor(private _rickService: RickMortyService) {
      this.filterRick = [
          {name: 'Seleccione filtro', code: 0},
          {name: 'Listar todos los personajes', code: 1},
          {name: 'Name', code: 2},
          {name: 'Species', code: 3}
      ];
      this.filterCount = [
        {name:'10',code:10},
        {name:'30',code:30},
        {name:'60',code:60},
        {name:'100',code:100}
      ];
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
      ];
      this.selectedFilterTableCard = 0;
  }

  ngOnInit(): void {
  }

  getCharactersPerPagination(event?: LazyLoadEvent): void {
    console.log("pagination:",event)
    if(this.selectedFilterRick?.code){
      this.loadingCharacters = true;
      let page = (event) ? (event?.first as number)/(event?.rows as number) + 1 : 1;
      console.log("page",page)
      this._rickService.getCharactersPerPagination(page, this.selectedFilterRick?.code,this.valueName).subscribe({
        next: (data: ResponseModel) => {
          this.loadingCharacters = false;
          this.characters = data.results;
          this.totalRecords = data.info.count;
        },
        error: (error: HttpErrorResponse) => {
          this.loadingCharacters = false;
          console.log("salí acá")
        }
      });
    }
  }

  filterCharacter(valueSelected: {originalEvent: PointerEvent, value: FilterRickMorty}): void{
    this.disabledModeVisualitazion = false;
    if(valueSelected.value.code == 1){
      this.selectedFilterTableCard = 0;
      this.disabledModeVisualitazion = true;
    }
  }

  /* getCharacters(): void{
    this.loadingCharacter = true;
    const referencia = this._rickService.getCharacters(this.selectedFilterRick.code,this.valueName).subscribe({
      next: (data: ResponseModel) => {
        this.loadingCharacter = false;
        this.characters = data.results;
        this.totalRecords = this.characters.length;
      },
      error: (error: HttpErrorResponse) => {
        this.loadingCharacter = false;
        console.log("ocurrió un error : ",error)
      }
    });

    console.log("la referencia es : ",referencia)
  } */

  getAllCharacters(): void{
    this.loadingCharacter = true;
    this._rickService.getAllCharacters().subscribe({
      next: (data: Character[]) => {
        this.loadingCharacter = false;
        this.characters = data;
      },
      error: (error: HttpErrorResponse) =>{
        this.loadingCharacter = false;
      }
    });
  }

  searchCharacter(): void{
    if(this.selectedFilterRick?.code){
        this.getCharactersPerPagination();
    }
  }

  myPaginationString!: string;
  setMyPagination(event: any) {
    //event.first: Index of first record being displayed 
    //event.rows: Number of rows to display in new page 
    //event.page: Index of the new page 
    //event.pageCount: Total number of pages
    let startRow = event.first + 1;
    let endRow =  startRow + event.rows;
    let totalRows = this.characters.length;
    this.myPaginationString  = "showing "+startRow +" to "+ endRow +" of "+ totalRows  +" entries"
    console.log("setMyPagination")
  }
  
  paginator(event: any): void{
    console.log(event)
  }

  loadCarsLazy($event: any): void {
    console.log("loadCarsLazy",$event)
  }

}
