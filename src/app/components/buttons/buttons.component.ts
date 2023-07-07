import { Component, OnInit, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit {

  constructor(
    private _cargaScripts:CargarScriptsService
  ) { 
    _cargaScripts.cargaScripts(["/buttons"])
  }


  ngOnInit(): void {
    
  }

}
