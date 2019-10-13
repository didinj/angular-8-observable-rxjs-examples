import { Component, OnInit } from '@angular/core';
import {Observable,  of,  throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

/* A Simple RxJS timer subscription */
// const source = timer(1000, 2000);
// const subscribe = source.subscribe(val => console.log(val));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);

/* Observable with Constructor Example */
// function sequenceSubscriber(observer) {
//   observer.next('Apple');
//   observer.next('Orange');
//   observer.next('Grappe');
//   observer.complete();

//   return {unsubscribe() {}};
// }

// const sequence = new Observable(sequenceSubscriber);

// sequence.subscribe({
//   next(num) { console.log(num); },
//   complete() { console.log('Finished sequence'); }
// });

/* Subscribing using Observer */
// const myObservable = of('apple', 'orange', 'grappe');

// const myObserver = {
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };
// const apiUrl = 'http://localhost:3000/api/v1/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-observable-rxjs';
  // data: any[] = [];
  inputChangeLog: string[] = [];
  inputForm: FormGroup;

  constructor(private http: HttpClient) {
    /* Subscribing using Observer */
    // myObservable.subscribe(myObserver);
    // this.getProducts()
    // .subscribe((res: any) => {
    //   this.data = res;
    //   console.log(this.data);
    // }, err => {
    //   console.log(err);
    // });
  }

  ngOnInit() {
    this.inputForm = new FormGroup({
      name: new FormControl()
    });
    this.logInputChange();
  }

  logInputChange() {
    const nameControl = this.inputForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => {
        this.inputChangeLog.push(value);
        console.log(this.inputChangeLog);
      }
    );
  }

  // ngAfterViewInit() {
    // const ESC_KEY = 27;
    // const nameInput = document.getElementById('yourname') as HTMLInputElement;
    // this.fromEvent(nameInput, 'keydown')
    // .subscribe((e: KeyboardEvent) => {
    //   if (e.keyCode === ESC_KEY) {
    //     nameInput.value = '';
    //   }
    // });
  // }

  // fromEvent(target: HTMLInputElement, eventName: string) {
  //   return new Observable((observer) => {
  //     const handler = (e: unknown) => observer.next(e);

  //     target.addEventListener(eventName, handler);

  //     return () => {
  //       target.removeEventListener(eventName, handler);
  //     };
  //   });
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(apiUrl)
  //     .pipe(
  //       tap(product => console.log('fetched products')),
  //       catchError(this.handleError('getProducts', []))
  //     );
  // }

  // getProduct(id: number): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<any>(`getProduct id=${id}`))
  //   );
  // }
}
