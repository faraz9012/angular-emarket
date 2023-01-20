import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  categories = [{
    categoryImage: 'https://emarketplace-banner.paymytuition.com/images/thumbs/0000013_14-oz-lakers-mug-copy_550.png',
    categoryName: 'Campus Rec-Sport Clubs Invoices',
    categoryDescription: 'Enjoy 14 ounces of beverage goodness in this branded Lakers mug. Metallic silver and white logo imprint on a black mug (both sides). With a great shape that holds a generous 414 mL (14 oz.), this Lakers coffee mug is ready to enjoy your favorite hot beverage. The extra-large handle makes it easy and comfortable to hold.',
    subCategories: 
    [
      {
        subCategoryImage: 'https://images.unsplash.com/photo-1538432091670-e6b79bd9bffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        subCategoryName: 'Archery Club Payments',
        subCategoryDescription: "Thank you for making a payment to the UNH Archery Club. When prompted, please enter the payment amount. In the text fields, please enter the students first and last name and the purpose of the payment. Please see the example below. EXAMPLE: $300.00 Purpose of Payment: Club Tournament in Colorado and new uniform cost. Please note UNH Campus Recreation does not provide refunds or allow returns for sport club payments.",
      },{
        subCategoryImage: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        subCategoryName: 'Baseball Club Payments',
        subCategoryDescription: "Thank you for making a payment to the UNH Club Baseball team. When prompted, please enter the payment amount. In the text fields, please enter the students first and last name and the purpose of the payment. Please see the example below. EXAMPLE: $300.00 Purpose of Payment: Club Tournament in Colorado and new uniform cost. Please note UNH Campus Recreation does not provide refunds or allow returns for sport club payments.",
      },{
        subCategoryImage: 'https://images.unsplash.com/photo-1530804458434-67fe207c3a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        subCategoryName: 'Climbing Club Payments',
        subCategoryDescription: "Thank you for making a payment to the UNH Climbing Club team. When prompted, please enter the payment amount. In the text fields, please enter the students first and last name and the purpose of the payment. Please see the example below. EXAMPLE: $300.00 Purpose of Payment: Club Tournament in Colorado and new uniform cost. Please note UNH Campus Recreation does not provide refunds or allow returns for sport club payments.",
      }
    ]
  },{
    categoryImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    categoryName: 'Department of Residential Life',
    categoryDescription: 'Metallic silver and white logo imprint on a headset (both sides). With a great shape that holds its own against the top brands. The extra-soft foam makes it easy and comfortable to wear.',
  },{
    categoryImage: 'https://images.unsplash.com/photo-1542556398-9e1da7ad3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
    categoryName: 'The New Hampshire Advertising',
    categoryDescription: 'Enjoy 14 ounces of beverage goodness in this branded Lakers mug. Metallic silver and white logo imprint on a black mug (both sides). With a great shape that holds a generous 414 mL (14 oz.), this Lakers coffee mug is ready to enjoy your favorite hot beverage. The extra-large handle makes it easy and comfortable to hold.'
  },{
    categoryImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    categoryName: 'Department of Residential Life',
    categoryDescription: 'Metallic silver and white logo imprint on a headset (both sides). With a great shape that holds its own against the top brands. The extra-soft foam makes it easy and comfortable to wear.',
  }
  ]
}
