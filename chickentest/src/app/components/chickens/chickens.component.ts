import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { Farm } from 'src/app/models/Farm';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import { FarmService } from 'src/app/services/farm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})
export class ChickensComponent implements OnInit {

  chickens:Chicken[];
  farm:Farm=new Farm();

  static id:number=0;
  constructor(private api:ChickenService,private apiFarm:FarmService,private apiBuySell:BuysellserviceService,private route:ActivatedRoute,private router:Router) { 

  }
  ngOnInit(): void {
    this.api.listarPollosParaCompras().subscribe(chickens=>{
      this.chickens=chickens;
    });
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      
      if(id){
        this.apiFarm.ver(id).subscribe(f => {
          this.farm = f;
        });
      }
    })
    
     
     
  }

  comprar(chicken:Chicken)
  {
  console.log(this.farm.id);
         this.apiBuySell.comprarPollo(chicken,8).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
          Swal.fire('Compra realizada!', '', 'success')  
         }); 
         this.router.navigate(['/chickens']);


    }
 
  }

