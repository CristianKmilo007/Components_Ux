import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service'

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionsComponent implements OnInit {

  constructor(
    private _cargaScripts:CargarScriptsService
  ) { 
    _cargaScripts.cargaScripts(["/accordions"])
  }

  ngOnInit(): void {
  }

}
