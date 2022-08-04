import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { Chicken } from 'src/app/models/Chicken';
import { Egg } from 'src/app/models/Egg';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { EggService } from 'src/app/services/egg.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  [x: string]: any;

  
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
      this.apichickens.listarPollosParaCompras().subscribe(chickens=>{
        this.chickens=chickens;
      });
      this.apiEggs.listarHuevosParaCompras().subscribe(eggs=>{
        this.eggs=eggs;
      });
  }

  comprarPollos(chicken:Chicken)
  {

          const id=this.farms[0].id;
  

         this.buysellservice.comprarPollo(chicken,id).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);

          this.api.modificarPresupuesto(this.farms[0].id,this.farms[0],chicken.price)    
          Swal.fire('Compra realizada!', '', 'success')  

         }); 


    }
    comprarHuevos(egg:Egg)
    {
  
            const id=this.farms[0].id;
    
  
           this.buysellservice.comprarHuevo(egg,id).subscribe(()=>{
              this.eggs=this.eggs.filter(e => e !== egg);
              this.api.modificarPresupuesto(this.farms[0].id,this.farms[0],egg.price)    
              Swal.fire('Compra realizada!', '', 'success')   
           }); 
  
  
      }
}
