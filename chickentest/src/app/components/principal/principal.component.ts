import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Egg } from 'src/app/models/Egg';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { EggService } from 'src/app/services/egg.service';
import { FarmService } from 'src/app/services/farm.service';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {



 
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
          console.log(this.chickens.length=0);
      
          if(this.chickens.length=0)
       {
        Swal.fire('No posee stock!', '', 'warning')  

       }
       else{
        console.log("mostrar lista");
       }

     }
/*   exportar()
  {
    this.api.exportarPDF();
  } */

}
