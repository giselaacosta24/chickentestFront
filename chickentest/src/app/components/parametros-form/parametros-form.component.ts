import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametro } from 'src/app/models/Parametro';
import { ParametrosService } from 'src/app/services/parametros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parametros-form',
  templateUrl: './parametros-form.component.html',
  styleUrls: ['./parametros-form.component.css']
})
export class ParametrosFormComponent implements OnInit {


  parametro:Parametro=new Parametro();

  constructor(private api:ParametrosService,private router:Router,private route:ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.api.ver(id).subscribe(p => {
          this.parametro = p;
        });
      }
    })
  }
  public crear(): void {
  
      this.api.crear(this.parametro).subscribe(parametro => {
     
     
        this.router.navigate(['/administrador'])})
}

public editar(): void {
  
  this.api.editar(this.parametro).subscribe(parametro => {
  
    Swal.fire('Se modifico con éxito', 'success');

    this.router.navigate(['/administrador'])})
}

}
