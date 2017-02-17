import { Component, Input, OnInit } from '@angular/core';

export class Customer {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  @Input() customer: Customer;

  thisColor = "red";

  constructor() {}

  ngOnInit() {}
}