import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { IPaymentCurrency, IRates } from '../interfaces/irates.model';
import { ICategories, ICCosts, ICosts, ISubCategories } from '../interfaces/icosts.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // JSON Data
  costEndpoint = 'http://localhost:4200/assets/json/costs.json';
  rateEndpoint = 'http://localhost:4200/assets/json/exchange-rates.json';

  // Selected payment currency object which will chang...
  // by selecting another currency from the currency menu
  selectedPaymentCurrency: IPaymentCurrency = {
    fromCurrency: 'SGD',
    toCurrency: 'SGD',
    exchangeRate: 1,
  };

  // List of sub categories(Barge Expenses, Fire Guard, Towage)
  // Each sub category will be pushed to this array after each
  // sub category is loaded
  subCategories: ISubCategories[] = [];

  mainCategories: ICategories[] = [];

  private selectedCurrencySubject = new Subject<IPaymentCurrency>();
  topMenuObservable = this.selectedCurrencySubject.asObservable();

  constructor(private http: HttpClient) {}

  public set changeMenuCurrency({ ...obj }) {
    this.selectedPaymentCurrency = { ...obj };
    this.selectedCurrencySubject.next({ ...obj });
  }

  public get changeMenuCurrency(): IPaymentCurrency {
    return this.selectedPaymentCurrency;
  }

  toggleComment(e: Event, id: number) {
    e.preventDefault();

    let currentCategory = this.subCategories.find(
      (item) => item.id == id
    ) as ISubCategories;
    currentCategory.visible = !currentCategory?.visible;
  }

  // This condition will be checked by table-comment-row-component
  // ...to show or hide the comment box
  isCommentOpen(id: number): boolean | undefined {
    return this.subCategories.find((item) => item.id == id)?.visible;
  }

  // Loading the costs data from assets/json/costs.json
  // ...by a request form CostsResolver
  getCosts(): Observable<ICosts> {
    return this.http.get<ICosts>(this.costEndpoint);
  }

  // Loading the rates data from assets/json/exchange-rates.json
  // ...by a request form RatesResolver
  getRates(): Observable<IRates> {
    return this.http.get<IRates>(this.rateEndpoint);
  }

  categorySum<T, TP>(array: T[], prop: TP): number {
    return array.reduce((accu: any, curr: any) => {
      return (accu += curr[prop]);
    }, 0);
  }

  currentSubCategories(categoryName: string): ISubCategories[] {
    return this.subCategories.filter(
      (category) => category.parentCategory == categoryName
    );
  }
}
