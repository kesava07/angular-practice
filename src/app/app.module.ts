import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './todo/list/list.component';
import { TodoMainComponent } from './todo/todo-main/todo-main.component';
import { appRouterModule } from './app-routing.module';
import { SearchBarComponent } from './youtube/search-bar/search-bar.component';
import { YoutubeMainComponent } from './youtube/youtube-main/youtube-main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideosListComponent } from './youtube/videos-list/videos-list.component';
import { VideosPlayerComponent } from './youtube/videos-player/videos-player.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoMainComponent,
    SearchBarComponent,
    YoutubeMainComponent,
    NavBarComponent,
    VideosListComponent,
    VideosPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
