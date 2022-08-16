import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  compras: Transaction[] = [];
  ventas: Transaction[] = [];

  comprastotal: Transaction[];
  ventastotal: Transaction[];
  ventasCantidadChicken: Transaction[];
  ventasCantidadEgg: Transaction[];
  comprasCantidadChicken: Transaction[];
  comprasCantidadEgg: Transaction[];

  constructor(private api:TransactionService,private route:ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.api.listarCompras().subscribe(compras=>{
      this.compras=compras;
    });
    this.api.listarVentas().subscribe(ventas=>{
      this.ventas=ventas;
    }); 
     this.api.totalCompras().subscribe(comprastotal=>{
      this.comprastotal=comprastotal;   

    }); 

    this.api.totalVentas().subscribe(ventastotal=>{
      this.ventastotal=ventastotal;   

    }); 
    this.api.totalCantidad("Venta","Chicken").subscribe(ventasCantidadChicken=>{
      this.ventasCantidadChicken=ventasCantidadChicken;   

    }); 
    this.api.totalCantidad("Compra","Chicken").subscribe(comprasCantidadChicken=>{
      this.comprasCantidadChicken=comprasCantidadChicken;   

    }); 
    this.api.totalCantidad("Venta","Egg").subscribe(ventasCantidadEgg=>{
      this.ventasCantidadEgg=ventasCantidadEgg;   

    }); 
    this.api.totalCantidad("Compra","Egg").subscribe(comprasCantidadEgg=>{
      this.comprasCantidadEgg=comprasCantidadEgg;   

    }); 
  }

}
