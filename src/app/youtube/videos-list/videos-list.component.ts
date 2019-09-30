import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  @Input() videosList;
  @Output() getVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSendVideo(video) {
    this.getVideo.emit(video);
  }

}
