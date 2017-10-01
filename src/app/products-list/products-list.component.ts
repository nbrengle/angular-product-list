import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { Product } from '../product.model'

/**
 * @ProductList: a Component for render all ProductRows
 * and storing the currently selected productList
*/
@Component({
  selector: 'products-list',
  template: `
    <div class="ui items">
        <product-row
          *ngFor="let product of productList"
          [product]="product"
          (click)="clicked(product)"
          [class.selected]="isSelected(product)">
        </product-row>
    </div>
  `,
})
export class ProductsListComponent {
    @Input() productList: Product[];

    @Output() onProductSelected: EventEmitter<Product>;

    private currentProduct: Product;

  constructor() {
      this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
      this.currentProduct = product;
      this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
      if(!product || !this.currentProduct) {
          return false;
      }
      return product.sku === this.currentProduct.sku;
  }

}
