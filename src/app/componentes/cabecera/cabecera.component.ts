import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }
  public whoami= "Gonzalo Ferrer"
  public whoami_git="https://github.com/upszot"

  ngOnInit() {
  }

}
