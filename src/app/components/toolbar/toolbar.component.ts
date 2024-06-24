import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(public themeService: ThemeService){}
  public toggleTheme(){
    const theme: string = this.themeService.theme == 'lightTheme' ? 'darkTheme' : 'lightTheme';
    this.themeService.setTheme(theme);
  }
}
