import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { LoginService } from 'src/app/services/login.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  screenMode!: boolean;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private screenModeService: ScreenModeService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
  this.screenModeService.screenMode = this.screenMode;
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }

  onLogginUser() {
    const userData: IUser = JSON.parse(JSON.stringify(this.loginForm.value));
    this.loginService.login(userData)
    .subscribe((result) => console.log(result));
  }
}
