import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-modal-simple',
  templateUrl: './rm-modal-simple.component.html',
  styleUrls: ['./rm-modal-simple.component.scss']
})
export class RmModalSimpleComponent implements OnInit {

  @Input() isVisible: boolean = true;
  constructor() { }

  ngOnChanges(): void{
    console.log("ngonchanges");
  }


  ngOnInit(): void {
    console.log("moidal simple")
  }

}
