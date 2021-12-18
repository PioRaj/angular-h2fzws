import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
