import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  farms:Farm[];
  constructor(private api:FarmService) { 

  }
  ngOnInit(): void {
    this.api.listar().subscribe(farms=>{
      this.farms=farms;
    }
      );
  }

}
