import { Component, OnInit } from '@angular/core';
import { Chicken } from 'src/app/models/Chicken';
import { ChickenService } from 'src/app/services/chicken.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chicken-form',
  templateUrl: './chicken-form.component.html',
  styleUrls: ['./chicken-form.component.css']
})


export class ChickenFormComponent implements OnInit {

chicken:Chicken=new Chicken();

  constructor(private api:ChickenService,private router:Router,private route:ActivatedRoute) 
  { }

ngOnInit(): void {
  
}
  public crear(): void {
  
      this.api.crear(this.chicken).subscribe(chicken => {
        console.log(chicken);
        Swal.fire('Se creó con éxito', 'success');

        this.router.navigate(['/chickens'])})
}

}


 
