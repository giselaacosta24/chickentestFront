import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Chicken } from 'src/app/models/Chicken';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { ChickenService } from 'src/app/services/chicken.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})
export class ChickensComponent implements OnInit {

  chickens:Chicken[];
  constructor(private api:ChickenService,private apiBuySell:BuysellserviceService,private router:Router) { 

  }
  ngOnInit(): void {
    this.api.listarParaCompras().subscribe(chickens=>{
      this.chickens=chickens;
    }
      );
  }

  comprar(chicken:Chicken)
  {

    console.log(chicken);
          this.apiBuySell.comprarPollo(chicken,8).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
          Swal.fire('Compra realizada!', '', 'success')  
         });
      
         this.router.navigate(['/chickens']);


    }
  eliminar(chicken:Chicken)
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
          this.api.eliminar(chicken.id).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
          Swal.fire('Venta realizada!', '', 'success')  
         });
        }
    });

    }
  }

