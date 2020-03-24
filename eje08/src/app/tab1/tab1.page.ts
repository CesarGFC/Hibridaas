import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { ProductService } from '../services/prodService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prods: Prod[] = [];

  constructor(private ProductService: ProductService, private router: Router) {
    this.prods = this.ProductService.getProd();
  }

  changeStatus(pos: number) {
    this.ProductService.changeStatus(pos);
  }

  newProduct(): void {
    this.router.navigate(['/new-prod']);
  }
  verDetalles(prod: Prod) {
    this.ProductService.verDetalles(prod);
  }
}
