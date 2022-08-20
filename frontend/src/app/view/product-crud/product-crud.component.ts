import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void { // Injeção de dependência para injetar o método (neste caso) dentro do objeto, como um link para navegação
    this.router.navigate(['/products/create']); // Router para navegar para outra página
  }

}
