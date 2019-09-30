import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-player',
  templateUrl: './videos-player.component.html',
  styleUrls: ['./videos-player.component.css']
})
export class VideosPlayerComponent implements OnInit {

  @Input() selectedVideo;
  videoUrl;

  constructor(private sanitizer: DomSanitizer) {

  };

  ngOnInit() {
    const url = `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.selectedVideo.id)                            
  }

}
