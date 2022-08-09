import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Chicken } from 'src/app/models/Chicken';
import { Egg } from 'src/app/models/Egg';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { EggService } from 'src/app/services/egg.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  farms:Farm[] = [];;
  chickens: Chicken[] = [];
  eggs: Egg[] = [];
  @Output() farmSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor(private api:FarmService,private route:ActivatedRoute,
    private apichickens:ChickenService,private buysellservice:BuysellserviceService,
    private apiEggs:EggService) { 

  }
  ngOnInit(): void {
    this.api.listar().subscribe(farms=>{
      this.farms=farms;
    }
      );
 
  }


  

  ocultarDetalles()
  {
    location.reload();


  }


  mostrarPollosyHuevos(id:number)
     {
      this.apichickens.listarPollosGranja(id).subscribe(c => {
        this.chickens = c; });
        this.apiEggs.listarHuevosGranja(id).subscribe(e => {
          this.eggs = e;  });
    

     }
    
comprar(farm:Farm)
{

  console.log(farm);
}


   
      mostrarDetalles(farm:Farm)
      {
        console.info("mostrar detalles",farm);
        this.farmSeleccionado.emit(farm);
      }
}
