import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { SharedService } from '../services/shared.service';

import { IRates } from '../interfaces/irates.model';

@Injectable({
  providedIn: 'root'
})
export class RatesResolver implements Resolve<IRates> {
  constructor(private service: SharedService) {}
  
  resolve(): Observable<IRates> {
    return this.service.getRates()
  }
}
