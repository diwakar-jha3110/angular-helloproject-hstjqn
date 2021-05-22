import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  @Output() update = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    this.update.emit();
    window.alert(
      `product added to cart Total: ${this.cartService.getItems().length}`
    );
  }
}
