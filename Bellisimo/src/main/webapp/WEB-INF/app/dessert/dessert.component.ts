import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//added
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ProductService} from "../product/product.service";
import {Product} from "../product/product";

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent   implements OnInit{

  //Component properties
  allProducts: Product[];
  statusCode: number;
  requestProcessing = false;
  productIdToUpdate = null;
  processValidation = false;


  //Create form
  productForm = new FormGroup({
    categorySubType: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  //routing
  navigate() {
    this.router.navigate(["clothing"]);
    this.router.navigate(["food"]);
    this.router.navigate(["contact"]);
    this.router.navigate(["home"]);
    this.router.navigate(["login"]);
    this.router.navigate(["women"]);
    this.router.navigate(["starters"]);
    this.router.navigate(["dessert"]);
  }
  //constructor
  constructor(private router: Router, private productService: ProductService) {}

//Create ngOnInit() and and load products
  ngOnInit(): void {
    this.getAllProducts();
  }
  //Fetch all products
  getAllProducts() {
    this.productService.getAllProducts()
      .subscribe(
        data => this.allProducts = data,
        errorCode =>  this.statusCode = errorCode);
  }
  //Handle create and update product
  onProductFormSubmit() {
    this.processValidation = true;
    if (this.productForm.invalid) {
      return; //Validation failed, exit from method.
    }
    //Form is valid, now perform create or update
    this.preProcessConfigurations();
    let product = this.productForm.value;
    if (this.productIdToUpdate === null) {
      //Generate product id then create product
      this.productService.getAllProducts()
        .subscribe(products => {

          //Generate product id
          let maxIndex = products.length - 1;
          let productWithMaxIndex = products[maxIndex];
          let productId = productWithMaxIndex.id + 1;
          product.id = productId;

          //Create product
          this.productService.createProduct(product)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllProducts();
                this.backToCreateProduct();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      //Handle update product
      product.id = this.productIdToUpdate;
      this.productService.updateProduct(product)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllProducts();
            this.backToCreateProduct();
          },
          errorCode => this.statusCode = errorCode);
    }
  }
  //Load product by id to edit
  loadProductToEdit(productId: string) {
    this.preProcessConfigurations();
    this.productService.getProductById(productId)
      .subscribe(product => {
          this.productIdToUpdate = product.id;
          this.productForm.setValue({
            category: product.category,
            categoryType: product.categoryType,
            categorySubType: product.categoryType,
            description: product.categorySubType,
            size: product.size,
            price: product.price,
            imagePath: product.imagePath
          });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode =>  this.statusCode = errorCode);

  }
  //Delete product
  deleteProduct(productId: string) {
    this.preProcessConfigurations();
    this.productService.deleteProductById(productId)
      .subscribe(successCode => {
          //this.statusCode = successCode;
          //Expecting success code 204 from server
          this.statusCode = 204;
          this.getAllProducts();
          this.backToCreateProduct();
        },
        errorCode => this.statusCode = errorCode);
  }
  //Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  //Go back from update to create
  backToCreateProduct() {
    this.productIdToUpdate = null;
    this.productForm.reset();
    this.processValidation = false;
  }

}

