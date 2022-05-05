import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  IBaseCurrency,
  ICategories,
  ICategory,
  ICCosts,
  ISubCategories,
  ISubCategory,
} from 'src/app/interfaces/icosts.model';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-table-cost-row',
  templateUrl: './table-cost-row.component.html',
  styleUrls: ['./table-cost-row.component.css'],
})
export class TableCostRowComponent implements OnInit {
  @Input() category!: ICategory;
  @Input() subCategory!: ISubCategory;

  baseCurrency: IBaseCurrency;

  costs!: ICCosts[];

  quotedAmount!: number;
  screenedAmount!: number;

  currentMainCategory!: ICategories;
  currentsubCategory!: ISubCategories;

  constructor(public service: SharedService, private route: ActivatedRoute) {
    this.baseCurrency = this.route.snapshot.data['costs'].baseCurrency;
  }

  ngOnInit(): void {
    this.costs = this.subCategory.costs;

    // Original quoted amount
    this.quotedAmount = this.costs.filter((item) => item.type == 'Quoted')[0]
      .amount as number;

    // Original screened amount
    this.screenedAmount = this.costs.filter(
      (item) => item.type == 'Screened'
    )[0].amount as number;

    this.currentSubCatQuotedAmount = this.quotedAmount;
    this.currentSubCatScreenedAmount = this.screenedAmount;

    // Getting the current main category
    this.currentMainCategory = this.service.mainCategories.find(
      (category) => category.id == this.category.id
    )!;

    // Getting the current sub categories as array
    this.currentsubCategory = this.service.subCategories.find(
      (category) => category.name == this.subCategory.name
    )!;

    // Observing top currency menu to change the quotedTotal variable
    this.service.topMenuObservable.subscribe({
      next: () => {
        // Set the new quotedAmount by changing currency on currency menu
        this.currentsubCategory.quotedAmount = this.currentSubCatQuotedAmount;
      },
    });
  }

  // Getting current sub category
  get currentSubCategory() {
    return this.service.subCategories.find(
      (item) => item.id == this.subCategory.id
    )!;
  }

  // Setting current sub category quoted amount
  set currentSubCatQuotedAmount(amount: number) {
    this.currentSubCategory['quotedAmount'] = amount;
  }

  // Getting current sub category quoted amount
  get currentSubCatQuotedAmount(): number {
    return this.quotedAmount! * this.service.changeMenuCurrency.exchangeRate;
  }

  // Setting current sub category screened amount
  set currentSubCatScreenedAmount(amount: number) {
    this.currentSubCategory['screenedAmount'] = amount;
  }

  // Getting current sub category screened amount
  get currentSubCatScreenedAmount(): number {
    return (
      this.currentSubCategory.screenedAmount! *
      this.service.changeMenuCurrency.exchangeRate
    );
  }

  // Screened amount input tag's change handler
  screenedAmountChangeHandler(e: Event) {
    let selectedInputValue = +(e.target as HTMLInputElement).value;
    this.currentSubCatScreenedAmount = selectedInputValue;

    // Updating the global screenedTotal variable's value
    this.currentMainCategory.screenedTotal = this.service.categorySum<
      ISubCategories,
      string
    >(this.service.currentSubCategories(this.category.name), 'screenedAmount');
  }
}
