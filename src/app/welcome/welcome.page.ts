import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  loginFG!: FormGroup;
  isConnected: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.authService.connectedSubject.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
    this.loginFG = this.builder.group({
      email : [null, Validators.required],
      password : [null, Validators.required],
    });
  };

  onSubmit(): void {
    this.authService.login(this.loginFG.get('email').value,this.loginFG.get('password').value);
    this.router.navigate(['tabs']);
  };
}
