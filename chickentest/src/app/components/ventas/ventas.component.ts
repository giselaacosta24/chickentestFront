import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Egg } from 'src/app/models/Egg';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { EggService } from 'src/app/services/egg.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

 
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
    });

    }
     



  iniciarVenta(idFarm:number){
    console.log(idFarm);
    this.apichickens.listarPollosGranja(idFarm).subscribe(c => {
      this.chickens = c; });
      this.apiEggs.listarHuevosGranja(idFarm).subscribe(e => {
        this.eggs = e;  });
       console.log(this.chickens);        
        console.log(this.eggs);
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
              location.reload();
            }) ;
            //  Swal.fire('Pollo Vendido!', '', 'success')  
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
                  this.api.modificarPresupuesto("venta",this.farms[0].id,egg.price,this.farms[0]).subscribe(farm => {
                    location.reload();
                  }) ;
                //Swal.fire('Huevo Vendido!', '', 'success')  
               });
              }
          });
      
          }

}
