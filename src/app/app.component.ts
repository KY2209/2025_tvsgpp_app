import { Component } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loading: boolean = false;

  constructor(
    private loadingService: LoadingService,

  ) {}

  ngOnInit() {

    this.loadingService.getValue().subscribe((value) => {
      this.loading = value;
    });

    // this.initializeApp();
  }
}
