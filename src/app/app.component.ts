import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'cafecito';

  constructor(
    private _themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, this._themeService.theme);  
  }

  changeTheme(theme: string): void {
    this._themeService.setTheme(theme)
  }
}
