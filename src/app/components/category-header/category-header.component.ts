import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icosts.model';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit {
  @Input() category!: ICategory;

  constructor() { }

  ngOnInit(): void {
  }

}
