import { Component, Input, OnInit } from '@angular/core';
import { ICategory, ICCosts } from 'src/app/interfaces/icosts.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category!: ICategory;

  quotedTotal!: number;

  categoryQuotedSum: any;

  constructor(private service: SharedService) {}

  ngOnInit(): void {

    this.service.mainCategories.push({
      id: this.category.id,
      name: this.category.name,
      quotedTotal: this.service.categorySum<ICCosts, string>(this.quotedArray, 'amount'),
      screenedTotal: this.service.categorySum<ICCosts, string>(this.screenedArray, 'amount'),
    });

  }

  get quotedArray(): ICCosts[] {
    return this.category.costItems.map((subCat) =>
      subCat.costs.find((item) => item.type == 'Quoted')
    ) as ICCosts[];
  }
  
  get screenedArray(): ICCosts[] {
    return this.category.costItems.map((subCat) =>
      subCat.costs.find((item) => item.type == 'Screened')
    ) as ICCosts[];
  }
}
