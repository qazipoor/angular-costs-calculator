import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IAppTitle, IBaseCurrency } from 'src/app/interfaces/icosts.model';
import { IPaymentCurrency, ISourceCurrency } from 'src/app/interfaces/irates.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() title!: IAppTitle;

  baseCurrency!: IBaseCurrency;
  sourceCurrency!: ISourceCurrency;
  paymentCurrencies: IPaymentCurrency[] = [];

  name: FormControl = new FormControl('');

  dropDown: FormGroup = new FormGroup({
    name: this.name,
  });

  constructor(private route: ActivatedRoute, public service: SharedService) {
    this.sourceCurrency = this.route.snapshot.data['rates'].sourceCurrency;
    this.baseCurrency = this.route.snapshot.data['costs'].baseCurrency;

    this.paymentCurrencies =
      this.route.snapshot.data['rates'].paymentCurrencies;

  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  topMenuChangeHandler(e: Event) {
    let selectedOptionValue = (e.target as HTMLSelectElement).value;

    this.service.changeMenuCurrency = this.paymentCurrencies.find(
      (item) => item.toCurrency == selectedOptionValue
    )!;
  }
}
