import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Egg } from 'src/app/models/Egg';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { EggService } from 'src/app/services/egg.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.css']
})
export class EggsComponent implements OnInit {

  eggs:Egg[];
  constructor(private api:EggService,private apiBuySell:BuysellserviceService,private router:Router) { 

  }
  ngOnInit(): void {

      this.api.listarHuevosParaCompras().subscribe(eggs=>{
        this.eggs=eggs;
      }
        );
  }

  eliminar(egg:Egg)
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
          this.api.eliminar(egg.id).subscribe(()=>{
            this.eggs=this.eggs.filter(c => c !== egg);
          Swal.fire('Venta realizada!', '', 'success')  
         });
        }
    });

    }

    comprar(egg:Egg)
    {
  
            this.apiBuySell.comprarHuevo(egg,8).subscribe(()=>{
              this.eggs=this.eggs.filter(c => c !== egg);
            Swal.fire('Compra realizada!', '', 'success')  
           });
        
           this.router.navigate(['/eggs']);
  
  
      }
  }

 

