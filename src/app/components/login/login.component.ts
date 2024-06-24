import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, Signal, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../shared/models/user/User';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public breakpoint: boolean;
  public isLoading: boolean = false;
  public loginError = signal(false);
  public fieldTextType = signal(false);
  private user: User | undefined;

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(
    private _themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    this.breakpoint = (window.innerWidth <= 720) ? true : false;
    if(!this.user){
    }
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 720) ? true : false;
  }

  toggleFieldTextType() {
    this.fieldTextType.set(!this.fieldTextType());
  }

  submit(): void{
    this.isLoading = true;
    setTimeout(() =>{
      this.isLoading = false;
      this.loginError.set(true);
    }, 3000)
  }

}
