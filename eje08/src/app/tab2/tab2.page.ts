import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { ProductService } from '../services/prodService';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  prods: Prod[];

  constructor(private sService: ProductService) {
    this.prods = this.sService.getProd();
  }

}
