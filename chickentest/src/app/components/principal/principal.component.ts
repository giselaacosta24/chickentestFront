import { Component, OnInit } from '@angular/core';
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

  farm:Farm;
  chickens: Chicken[] = [];

  constructor(private api:FarmService,private route:ActivatedRoute) { 

  }
  ngOnInit(): void {
 /*    this.api.listar().subscribe(farms=>{
      this.farms=farms;
      this.chickens=this.farms.chickens;
    }
      );
 */
      this.route.paramMap.subscribe(params => {
        const id: number = +params.get('id');
        this.api.ver(1).subscribe(f => {
          this.farm = f;
          this.chickens = this.farm.chickens;
       
  
        });
      });
console.log(this.farm);
console.log(this.chickens);
  }

}
