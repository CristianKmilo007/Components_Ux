import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from './../../services/cargar-scripts.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

  constructor(
    private _cargaScripts:CargarScriptsService
  ) { 
    _cargaScripts.cargaScripts(["/forms"])
  }

  ngOnInit(): void {
  }

}
