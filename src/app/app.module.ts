import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { TableCostRowComponent } from './components/table-cost-row/table-cost-row.component';
import { TableCommentRowComponent } from './components/table-comment-row/table-comment-row.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { TableTotalComponent } from './components/table-total/table-total.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, CategoryComponent, CategoryHeaderComponent, TableCostRowComponent, TableCommentRowComponent, SubcategoryComponent, TableTotalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
