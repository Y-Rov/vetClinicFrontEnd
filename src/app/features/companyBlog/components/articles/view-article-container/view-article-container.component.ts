import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Article} from "../../../../../core/models/Article";
import {DateTimeService} from "../../../services/dateTimeService/date-time.service";

@Component({
  selector: 'app-view-article-container',
  templateUrl: './view-article-container.component.html',
  styleUrls: ['./view-article-container.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ViewArticleContainerComponent implements OnInit {

  @Input() article?: Article;

  constructor(public dateService: DateTimeService) { }

  ngOnInit(): void {
  }

}
