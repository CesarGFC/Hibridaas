import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { ProductService } from '../services/prodService';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  prods: Prod[];

  constructor(private prodService: ProductService) {
    this.prods = this.prodService.getProd();
  }

}
