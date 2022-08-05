import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Egg } from 'src/app/models/Egg';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { EggService } from 'src/app/services/egg.service';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  
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

            this.api.modificarPresupuesto("compra",this.farms[0].id,chicken.price,this.farms[0]).subscribe(farm => {
              location.reload();}) ;

              this.buysellservice.comprarPollo(chicken,id).subscribe(()=>{
                this.chickens=this.chickens.filter(c => c !== chicken);
    
                 
    
             }); 

  

      }
    comprarHuevos(egg:Egg)
    {
  
            const id=this.farms[0].id;
    
            this.api.modificarPresupuesto("compra",this.farms[0].id,egg.price,this.farms[0]).subscribe(farm => {
              location.reload();}) ;

              this.buysellservice.comprarHuevo(egg,id).subscribe(()=>{
                this.eggs=this.eggs.filter(e => e !== egg);
    
                 
    
             }); 

  

      }
      
}
