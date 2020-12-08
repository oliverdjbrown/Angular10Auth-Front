import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: '',
    token: ''
  };

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }

}
