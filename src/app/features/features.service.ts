import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feature } from './feature';
import { environment } from '../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};

@Injectable()
export class FeaturesService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FeaturesService');
  }

  
  /** GET features from the server */
  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(environment.feature_list)
      .pipe(
        catchError(this.handleError('getFeatures', []))
      );
  }

}