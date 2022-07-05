import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exception } from 'src/app/core/models/Exception';
import { ExceptionService } from '../../services/exception.service';

@Component({
  selector: 'app-exception-detail-page',
  templateUrl: './exception-detail-page.component.html',
  styleUrls: ['./exception-detail-page.component.sass']
})

export class ExceptionDetailPageComponent implements OnInit {
  exception: Exception | null = null;

  constructor(private exceptionService: ExceptionService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.updateThis(this.route.snapshot.params['id']);

  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.router.navigateByUrl('/exceptions');
  }

  private updateThis(id: number): void {
    console.log(id);
    this.exceptionService.getExceptionById(id).subscribe((exception) => {
      this.exception = exception;
      console.log(exception);
    });
  };
}
