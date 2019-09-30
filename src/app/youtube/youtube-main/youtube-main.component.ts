import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-main',
  templateUrl: './youtube-main.component.html',
  styleUrls: ['./youtube-main.component.css'],
  providers: [YoutubeService]
})
export class YoutubeMainComponent implements OnInit {

  videosData: any[];
  videoToPlay: any;

  constructor(private ytService: YoutubeService) { }

  ngOnInit() {
  }

  handleSubmitSearch(text) {
    this.ytService.getVideos(text).subscribe(res => {
      this.videosData = res.items;
    }, (err) => {
      console.log(err)
    })
  }

  handleGetVideoData(video) {
    this.videoToPlay = video;
  }

}
