import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  itemCount;
  constructor(private cartService: CartService) {
    this.itemCount = this.cartService.getItems().length || 0;
  }
  ngOnInit() {
    debugger;
    this.itemCount = this.cartService.items.length || 0;
  }
  onUpdate() {
    this.itemCount = this.cartService.getItems().length || 0;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
