import { Component, OnInit } from '@angular/core';
import { Chicken } from 'src/app/models/Chicken';
import { ChickenService } from 'src/app/services/chicken.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})
export class ChickensComponent implements OnInit {

  chickens:Chicken[];
  constructor(private api:ChickenService) { 

  }
  ngOnInit(): void {
    this.api.listar().subscribe(chickens=>{
      this.chickens=chickens;
    }
      );
  }

  eliminar(chicken:Chicken)
  {

    Swal.fire({  
      title: 'Estas seguro?',  
      text:'¿Esta seguro de eliminar?',
      icon: 'warning',
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete`,  
    }).then((result) => {  
        if (result.value) {    
          this.api.eliminar(chicken.id).subscribe(()=>{
            this.chickens=this.chickens.filter(c => c !== chicken);
          Swal.fire('Deleted!', '', 'success')  
         });
        }
    });

    }
  }

