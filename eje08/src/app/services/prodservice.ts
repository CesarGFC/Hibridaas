import { Injectable } from '@angular/core';
import { Prod } from '../models/prod';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private prod: Prod[] = new Array();

  constructor(private router: Router) {
    this.prod.push({
      name: 'xbox 360',
      descrip: '123456789',
      active: true
    });
  }
  changeStatus(position: number) {
    this.prod[position].active = !this.prod[position].active;
  }
  verDetalles(prod: Prod) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(prod)
      }
    };

    this.router.navigate(['/detalles'], extras);
  }
  getProd(): Prod[] {
    return this.prod;
  }

  newprod(prod: Prod): void {
    this.prod.push(prod);
  }
}
