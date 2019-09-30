import { Http, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeService {

    constructor(private http: Http) {

    }

    getVideos(text) {
        let params = new URLSearchParams();
        params.append('part', 'snippet');
        params.append('maxResults', '10');
        params.append('key', 'your api key');
        params.append('q', text);
        return this.http.get("https://www.googleapis.com/youtube/v3/search", { search: params })
            .map((response => response.json()))
    }

}