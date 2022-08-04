import { Component, OnInit } from '@angular/core';
import { Chicken } from 'src/app/models/Chicken';
import { ChickenService } from 'src/app/services/chicken.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BuysellserviceService } from 'src/app/services/buysellservice.service';
import { FarmService } from 'src/app/services/farm.service';
@Component({
  selector: 'app-chicken-form',
  templateUrl: './chicken-form.component.html',
  styleUrls: ['./chicken-form.component.css']
})


export class ChickenFormComponent implements OnInit {

chicken:Chicken=new Chicken();
idFarm:number;

  constructor(private api:ChickenService,private apiFarm:FarmService,private apiBuySell:BuysellserviceService,private router:Router,private route:ActivatedRoute) 
  { }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id: number = +params.get('id');
    
    if(id){
      this.api.ver(id).subscribe(c => {
        this.chicken = c;
      });
    }
  })
}
  public reponer(): void {
  
      this.api.crear(this.chicken).subscribe(chicken => {
        console.log(chicken);
        Swal.fire('Se repuso con exito', 'success');

        this.router.navigate(['/chickens'])})
}


public editar(): void {
  
  this.api.editar(this.chicken).subscribe(chicken => {
    console.log(chicken);
    Swal.fire('Se modifico con éxito', 'success');

    this.router.navigate(['/principal'])})
}
}


 
