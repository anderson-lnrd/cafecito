import { Component } from '@angular/core';
import { FeedPostFieldComponent } from "../feed-post-field/feed-post-field.component";
import { PostComponent } from "../post/post.component";

@Component({
    selector: 'app-feed',
    standalone: true,
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
    imports: [FeedPostFieldComponent, PostComponent]
})
export class FeedComponent {

}
