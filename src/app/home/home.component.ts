import { Component, OnInit, ViewChild, TemplateRef, Renderer2, ElementRef, ViewContainerRef } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';
import { ResponseModel } from '../class/response.model';
import { Character } from '../class/RickMorty.model';

import { ModalSimpleService } from '../services/modal-simple.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('main', { static: false }) main!: ElementRef;
  @ViewChild('simple', { static: false }) simple!: ElementRef;

  displayBasic!: boolean;
  characters: Character[];
  showModal: boolean = false
  responsiveOptions: any[];

  constructor(
    public viewContainerRef: ViewContainerRef,
      private _rickService: RickMortyService, 
      private _modalSimpleService: ModalSimpleService,
      private renderer:Renderer2
    ) { 
    this.characters = [];
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
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void{
    const referencia = this._rickService.getCharactersFirsPagination().subscribe({
      next: (data: ResponseModel) => {
        this.characters = data.results;
      },
      error: (error: HttpErrorResponse) => {
        console.log("ocurrió un error : ",error)
      }
    });

    console.log("la referencia es : ",referencia)
  }

  openInformationalDialog(elemento: Character): void{
    const cuerpo = document.querySelector(".cuerpo");
    const modal = this.renderer.createElement('rm-modal-simple');
    const text = this.renderer.createElement('<p>Inserted at bottom</p>');
    this.renderer.setAttribute(text,'isVisible','true');
    console.log("modal:",modal)
    this.renderer.appendChild(cuerpo,text)
    console.log("aca", this.main)
    this._modalSimpleService.showDialog(true);
  }

  showBasicDialog() {
    this.viewContainerRef.createComponent(this.simple.nativeElement)
    this.showModal = true;
    console.log("no simple: ",this.main)
    console.log("el simple: ",this.simple)
  }
}
