import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  images: string[] = ['first', 'second', 'third'];

  constructor() { }

  ngOnInit(): void {
  }

}
