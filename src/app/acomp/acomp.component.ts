import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.scss']
})
export class AcompComponent implements OnInit {

  data: any;
  navStart: Observable<NavigationStart>;

  constructor(private router: Router, private sharedData: SharedService) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data);
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
  }

  changeData() {
    this.sharedData.changeData({name: 'Eric Cantona'});
    this.router.navigate(['/bcomp']);
  }

}
