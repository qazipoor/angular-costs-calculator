export interface IRates {
  sourceCurrency: string;
  paymentCurrencies: IPaymentCurrency;
}

export interface IPaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

export type ISourceCurrency = string
