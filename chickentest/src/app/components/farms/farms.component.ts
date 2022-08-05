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
         console.log(this.chickens);        
          console.log(this.eggs);

     }
    
comprar(farm:Farm)
{

  console.log(farm);
}
  venderPollo(chicken:Chicken)
  {

    Swal.fire({  
      title: 'Estas seguro?',  
      text:'¿Esta seguro de vender?',
      icon: 'warning',
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, Seguro`,  
    }).then((result) => {  
        if (result.value) {    
          this.buysellservice.venderPollo(chicken.id).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
            this.api.modificarPresupuesto("venta",this.farms[0].id,chicken.price,this.farms[0]).subscribe(farm => {
              location.reload(); }) ;
          Swal.fire('Pollo Vendido!', '', 'success')  
         });
        }
    });

    }

    venderHuevo(egg:Egg)
    {
  
      Swal.fire({  
        title: 'Estas seguro?',  
        text:'¿Esta seguro de vender?',
        icon: 'warning',
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Si, Seguro`,  
      }).then((result) => {  
          if (result.value) {    
            this.buysellservice.venderHuevo(egg.id).subscribe(()=>{
              this.eggs=this.eggs.filter(e => e !== egg);
            Swal.fire('Huevo Vendido!', '', 'success')  
           });
          }
      });
  
      }

      mostrarDetalles(farm:Farm)
      {
        console.info("mostrar detalles",farm);
        this.farmSeleccionado.emit(farm);
      }
}
