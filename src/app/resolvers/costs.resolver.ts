import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class CostsResolver implements Resolve<any> {
  constructor(private service: SharedService) {}
  resolve(): Observable<any> {
    return this.service.getCosts().pipe(catchError((err) => EMPTY));
  }
}
