import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {
  farm:Farm=new Farm();

  constructor(private api:FarmService,private router:Router,private route:ActivatedRoute) 
  { }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id: number = +params.get('id');
    if(id){
      this.api.ver(id).subscribe(c => {
        this.farm = c;
      });
    }
  })
}
  public crear(): void {
  
      this.api.crear(this.farm).subscribe(farm => {
        console.log(farm);
        Swal.fire('Granja Creada', 'success');

        this.router.navigate(['/principal'])})
}
public editar(): void {
  
  this.api.editar(this.farm).subscribe(farm => {
    console.log(farm);
    Swal.fire('Se modifico con éxito', 'success');

    this.router.navigate(['/principal'])})
}
}
