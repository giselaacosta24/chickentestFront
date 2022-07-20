import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private api:EggService,private router:Router) 
  { }

ngOnInit(): void {
  
}
  public crear(): void {
  
      this.api.crear(this.egg).subscribe(egg => {
        console.log(egg);
        Swal.fire('Se creó con éxito', 'success');

        this.router.navigate(['/eggs'])})
}
}
