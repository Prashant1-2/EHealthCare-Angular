import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appdetail } from '../../model/appdetail';
import { AppdetailsserviceService } from '../../service/appdetailsservice.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  aptdt: appdetail[] = [];
  i: number = 1;
  showSpinner: Boolean = false;



  constructor(private route: ActivatedRoute, private router: Router,

    private apsrv: AppdetailsserviceService,) { }

  ngOnInit() {
    //  this.aptdt = new appdetail();
    console.log("ngOnInit is called");
    setTimeout(() => { this.showData() }, 10);
  }


  showData() {
    this.showSpinner = true;
    this.apsrv.getdetails().subscribe(data => {
      console.log(data); this.aptdt = data;
      this.showSpinner = false;
    }, error => console.log(error));
  }

  deletep(id: number) {
    this.apsrv.deleteEmployee(id).subscribe(data => {
      console.log(data); this.showData();
    }, error => console.log(error));
    alert("Details deleted successfully")
  }

  returndash() {
    this.router.navigateByUrl('/dashboard');
  }
}


