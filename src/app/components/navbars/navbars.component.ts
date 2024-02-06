import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service'

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarsComponent implements OnInit {

  constructor(
    private _cargaScripts:CargarScriptsService
  ) { 
    _cargaScripts.cargaScripts(["/navbars"])
  }

  ngOnInit(): void {
  }

}
