import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBaseCurrency, ICategories, ICategory, ISubCategories } from 'src/app/interfaces/icosts.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.css'],
})
export class TableTotalComponent implements OnInit, AfterViewInit {
  @Input() category!: ICategory;

  baseCurrency: IBaseCurrency;

  currentMainCategory!: ICategories;

  constructor(private route: ActivatedRoute, public service: SharedService) {
    this.baseCurrency = this.route.snapshot.data['costs'].baseCurrency;
  }

  ngOnInit(): void {

    // Getting the current main category
    this.currentMainCategory = this.service.mainCategories.find(
      (category) => category.id == this.category.id
    )!;
    
  }

  ngAfterViewInit(): void {
    // Changing the quotedTotal by observing the currency menu
    this.service.topMenuObservable.subscribe({
      next: () => {
        // Updating the global quotedTotal variable's value
        this.currentMainCategory.quotedTotal = this.service.categorySum<
          ISubCategories,
          string
        >(this.service.currentSubCategories(this.category.name), 'quotedAmount');
      },
    });
  }
}
