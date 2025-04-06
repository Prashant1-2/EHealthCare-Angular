import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-records',
  templateUrl: './test-records.component.html',
  styleUrls: ['./test-records.component.css']
})
export class TestRecordsComponent {
  constructor(private router: Router) { }
  returndash() {

    this.router.navigateByUrl('/dashboard');
  }
}
