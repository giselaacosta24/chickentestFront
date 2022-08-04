import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Farm } from 'src/app/models/Farm';
import { ChickenService } from 'src/app/services/chicken.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  farms:Farm[] = [];;


  oneFarm: Farm;
  farm:Farm;
   chickens: Chicken[] = [];
   @Output() farmSeleccionada: EventEmitter<any>= new EventEmitter<any>();
  constructor(private api:FarmService,private route:ActivatedRoute,private apichickens:ChickenService) { 

  }
  ngOnInit(): void {
    this.api.listar().subscribe(farms=>{
      this.farms=farms;
    }
      );
 
      // this.route.paramMap.subscribe(params => {
      //   const id: number = +params.get('id');
      //   this.api.ver(1).subscribe(f => {
      //     this.farm = f;
      //     this.chickens = this.farm.chickens;
       
  
      //   });
      // });
// console.log(this.farm);
// console.log(this.chickens);
  }

  public mostrar(id: number) {
     this.route.paramMap.subscribe(params => {

      // const id: number = +params.get('id');
      this.api.ver(id).subscribe(f => {
        this.farm = f;
        // this.chickens = this.farm.chickens;
         console.log(this.farm);


      });
    }); 

  /*   this.api.editar(this.egg).subscribe(egg => {
      console.log(egg);
      Swal.fire('Se modifico con éxito', 'success');
  
      this.router.navigate(['/eggs'])}) */
  }


 
/*   mostrarDetalles(oneFarm:Farm)
  {
    console.info("mostrar detalles",oneFarm);
    this.farmSeleccionada.emit(oneFarm);
    this.apichickens.listar().subscribe(chickens=>{
      this.chickens=chickens;
    }
      );
  } */

  ocultarDetalles()
  {
    location.reload();


  }

  tomarFarmParaDetalles(NuevoFarm: Farm)
  {
    this.oneFarm=NuevoFarm;   
  }
  mostrarDetalles(oneFarm:Farm)
     {
       console.info("mostrar detalles",oneFarm);
       this.farmSeleccionada.emit(oneFarm);
     }

  eliminar(farm:Farm)
  {

    Swal.fire({  
      title: 'Estas seguro?',  
      text:'¿Esta seguro de borrar?',
      icon: 'warning',
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, Seguro`,  
    }).then((result) => {  
        if (result.value) {    
          this.api.eliminar(farm.id).subscribe(()=>{
            this.farms=this.farms.filter(c => c !== farm);
          Swal.fire('Granja Eliminada!', '', 'success')  
         });
        }
    });

    }
}
