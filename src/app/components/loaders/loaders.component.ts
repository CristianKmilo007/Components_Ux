import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service'

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadersComponent implements OnInit {

  constructor(
    private _cargaScripts:CargarScriptsService
  ) { 
    _cargaScripts.cargaScripts(["/loaders"])
  }

  ngOnInit(): void {
  }

}
