import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobarErrorHandler implements ErrorHandler{
  handleError(error: any): void {
  }

  constructor() { }
}
