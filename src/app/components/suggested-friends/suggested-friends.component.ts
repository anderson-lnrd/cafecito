import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-suggested-friends',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './suggested-friends.component.html',
  styleUrl: './suggested-friends.component.scss'
})
export class SuggestedFriendsComponent {

}
