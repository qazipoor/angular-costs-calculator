export type IAppTitle = string;
export type IDaCurrency = string;

export interface ICosts {
  daCurrency: IDaCurrency;
  baseCurrency: IBaseCurrency;
  costs: ICategory;
}

export interface IBaseCurrency {
  currency: string;
  exchangeRate: number;
}

export interface ICategory {
  id: number;
  name: string;
  displayOrder: 1;
  costItems: ISubCategory[];
}

export interface ISubCategory {
  id: number;
  name: string;
  costItemAlias: IAccountingCode;
  annotation: IAnnotation;
  costs: ICCosts[];
  comments: IComments[];
}

export interface IAccountingCode {
  accountingCode: string;
}

export interface IAnnotation {
  id: number;
  name: string;
}

export interface ICCosts {
  daStage?: string;
  persona?: string;
  type?: string;
  amount?: number;
}

export interface IComments {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: string;
  date: Date;
}

export interface ICategories {
  id?: number;
  name?: string;
  quotedTotal?: number;
  screenedTotal?: number;
}

export interface ISubCategories {
  id?: number;
  name?: string;
  parentCategory?: string;
  quotedAmount?: number;
  screenedAmount?: number;
  visible?: boolean;
}
