import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.scss']
})
export class BcompComponent implements OnInit {

  data: any;

  constructor(private router: Router, private sharedData: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data);
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }

  changeData() {
    this.sharedData.changeData({name: 'Romario Varia'});
    this.router.navigate(['/acomp']);
  }

}
