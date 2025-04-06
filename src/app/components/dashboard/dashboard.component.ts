import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FetchingemailService } from '../../service/fetchingemail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userinit: string = '';
  validateButton: boolean = false;

  
  constructor(private route: ActivatedRoute, private router: Router, private personalemail: FetchingemailService,
    private authService: AuthService) { }

  ngOnInit() {
    this.userinit = this.authService.getUserName();
    this.personalemail.getUser(this.userinit).subscribe(res => {
      console.log(res);
      if (res.isadmin === "true") {
        console.log("comming Here");
        this.validateButton = true;
      } else {
        this.validateButton = false;
      }



    }, err => {
      console.log("error while updating data. ")
    }
    );
  }

}
