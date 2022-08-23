import { ThisReceiver } from '@angular/compiler';
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

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {



 
  farms:Farm[] = [];;
  chickens: Chicken[] = [];
  eggs: Egg[] = [];

  cantpollos:number;
  canthuevos:number;


  constructor(private api:FarmService,private route:ActivatedRoute,
    private apichickens:ChickenService,private buysellservice:BuysellserviceService,
    private apiEggs:EggService, private apiNotifications:NotificationService) { 

  }

  ngOnInit(): void {
    this.api.listar().subscribe(farms=>{
      this.farms=farms;
      const id=this.farms[0].id;

      this.apichickens.listarPollosGranja(id).subscribe(c => {
        this.chickens = c;});
       this.apiEggs.listarHuevosGranja(id).subscribe(e => {
     
         this.eggs = e;});
    }
  );
  }

  ocultarDetalles()
  {
    location.reload();


  }



    
   exportar()
  {
    this.apiNotifications.exportarPDF();
  } 
 }

