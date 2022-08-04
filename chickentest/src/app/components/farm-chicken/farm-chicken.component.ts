import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farm-chicken',
  templateUrl: './farm-chicken.component.html',
  styleUrls: ['./farm-chicken.component.css']
})
export class FarmChickenComponent implements OnInit {
  @Input()
  oneFarm: Farm ;
  farm:Farm=new Farm();
  name: String ;
  chickens:Chicken[];
  chicken:Chicken=new Chicken();
  estimate: number;
  @Output() farmSeleccionada: EventEmitter<any>= new EventEmitter<any>();
  

 

  constructor(private apiChicken:ChickenService,private apiFarm:FarmService,private apiBuySell:BuysellserviceService,private router:Router,private route:ActivatedRoute) 
  {}

  ngOnInit(): void {
    console.log(this.oneFarm.name);
    this.apiChicken.listarParaCompras().subscribe(chickens=>{
      this.chickens=chickens;
    }
    );
  }
/*      this.route.paramMap.subscribe(params => {

      this.name = this.oneFarm.name;
      console.log(this.oneFarm.id);
       if(this.name){
        // this.farm= this.apiFarm.buscarPorNombre(this.name);
             console.log(this.farm.id);

      }
     }) */
/*     console.log(this.oneFarm.id);
    this.apiChicken.listarPollosGranja(this.oneFarm.id).subscribe(chickens=>{
      this.chickens=chickens;
    }
       );
  }
  public comprar(name:String): void {
 console.log('Nomnre:',this.oneFarm.name);
    this.name = this.oneFarm.name;
    if(this.name){
      this.apiFarm.buscarPorNombre(this.name).subscribe(c => {
        this.farm = c;
        console.log('farm', this.farm );
      });
    }
 console.log('chickem',this.chicken);
 console.log('chickem',this.oneFarm.id);
 this.estimate=this.oneFarm.estimate-this.chicken.price;
 this.oneFarm.estimate=this.estimate;
 console.log(this.oneFarm.estimate);
this.apiBuySell.modificarPresupuesto(this.oneFarm, this.oneFarm.id);

    this.apiBuySell.comprarPollo(this.chicken,this.oneFarm.id).subscribe(chicken => {
      console.log(chicken);
      Swal.fire('Compra realizada', 'success');
     })  

  } */
      // this.router.navigate(['/principal'])
  vender(chicken:Chicken)
  {

    Swal.fire({  
      title: 'Estas seguro?',  
      text:'¿Esta seguro de vender?',
      icon: 'warning',
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, seguro`,  
    }).then((result) => {  
        if (result.value) {    
          this.apiBuySell.vender(chicken.id).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
          Swal.fire('Venta realizada!', '', 'success')  
         });
        }
    });

}

mostrarDetalles(oneFarm:Farm)
{
  console.info("mostrar detalles",oneFarm);
  this.farmSeleccionada.emit(oneFarm);
}
}