import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = [{
    productImage: 'https://emarketplace-banner.paymytuition.com/images/thumbs/0000013_14-oz-lakers-mug-copy_550.png',
    productName: '14 oz Lakers Mug',
    productDescription: 'Enjoy 14 ounces of beverage goodness in this branded Lakers mug. Metallic silver and white logo imprint on a black mug (both sides). With a great shape that holds a generous 414 mL (14 oz.), this Lakers coffee mug is ready to enjoy your favorite hot beverage. The extra-large handle makes it easy and comfortable to hold.',
    productPrice: 15
  },{
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    productName: 'C D-X',
    productDescription: 'Metallic silver and white logo imprint on a headset (both sides). With a great shape that holds its own against the top brands. The extra-soft foam makes it easy and comfortable to wear.',
    productPrice: 35
  },{
    productImage: 'https://images.unsplash.com/photo-1542556398-9e1da7ad3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
    productName: 'Custom Mug',
    productDescription: 'Enjoy 14 ounces of beverage goodness in this branded Lakers mug. Metallic silver and white logo imprint on a black mug (both sides). With a great shape that holds a generous 414 mL (14 oz.), this Lakers coffee mug is ready to enjoy your favorite hot beverage. The extra-large handle makes it easy and comfortable to hold.',
    productPrice: 25
  }
  ]
}
