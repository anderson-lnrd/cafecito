import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-side-toolbar',
  standalone: true,
  imports: [
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './side-toolbar.component.html',
  styleUrl: './side-toolbar.component.scss'
})
export class SideToolbarComponent {

}
