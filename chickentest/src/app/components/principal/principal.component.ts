import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Output()
  oneFarm: Farm = new Farm;

  ListadoFarmsPrincipal: Farm[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  tomarFarmParaDetalles(NuevoFarm: Farm)
  {
    this.oneFarm=NuevoFarm;   
  }
}
