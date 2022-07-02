import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}