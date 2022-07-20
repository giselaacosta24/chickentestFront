import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Egg } from 'src/app/models/Egg';
import { EggService } from 'src/app/services/egg.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-egg-form',
  templateUrl: './egg-form.component.html',
  styleUrls: ['./egg-form.component.css']
})
export class EggFormComponent implements OnInit {


  egg:Egg=new Egg();

  constructor(private api:EggService,private router:Router,private route:ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.api.ver(id).subscribe(e => {
          this.egg = e;
        });
      }
    })
  }
  public crear(): void {
  
      this.api.crear(this.egg).subscribe(egg => {
        console.log(egg);
        Swal.fire('Se creó con éxito', 'success');

        this.router.navigate(['/eggs'])})
}

public editar(): void {
  
  this.api.editar(this.egg).subscribe(egg => {
    console.log(egg);
    Swal.fire('Se modifico con éxito', 'success');

    this.router.navigate(['/eggs'])})
}
}
