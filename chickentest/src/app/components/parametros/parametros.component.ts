import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parametro } from 'src/app/models/Parametro';
import { ParametrosService } from 'src/app/services/parametros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  parametros:Parametro[];
  constructor(private api:ParametrosService,private router:Router) { }

  ngOnInit(): void {


      try{
       this.api.listar().subscribe(parametros=>{
          this.parametros=parametros;

       })}catch(err)  {
           console.error(err);
   
           throw err;
         }
}


eliminar(parametro:Parametro)
{

  Swal.fire({  
    title: 'Estas seguro?',  
    text:'¿Esta seguro de eliminar?',
    icon: 'warning',
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Si, Seguro`,  
  }).then((result) => {  
      if (result.value) {    
        this.api.eliminar(parametro.id).subscribe(()=>{
          this.parametros=this.parametros.filter(p => p !== parametro);
        Swal.fire('Eliminado!', '', 'success')  
       });
      }
  });

  }

}
