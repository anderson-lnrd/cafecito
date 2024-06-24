import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { SideToolbarComponent } from "../side-toolbar/side-toolbar.component";
import { FeedComponent } from "../feed/feed.component";
import { SuggestedFriendsComponent } from "../suggested-friends/suggested-friends.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChatToolbarComponent } from "../chat-toolbar/chat-toolbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatToolbarModule,
        ToolbarComponent,
        MatGridListModule,
        SideToolbarComponent,
        FeedComponent,
        SuggestedFriendsComponent,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        ChatToolbarComponent
    ]
})
export class HomeComponent {

}
