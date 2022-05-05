import { Component, Input, OnInit } from '@angular/core';
import { ICategory, ISubCategories, ISubCategory } from 'src/app/interfaces/icosts.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css'],
})
export class SubcategoryComponent implements OnInit {
  @Input() category!: ICategory;
  @Input() subCategory!: ISubCategory;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.service.subCategories.push({
      id: this.subCategory.id,
      name: this.subCategory.name,
      parentCategory: this.category.name,
      visible: false,
    });
  }
}
