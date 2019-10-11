import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoMainComponent } from './todo/todo-main/todo-main.component';
import { YoutubeMainComponent } from './youtube/youtube-main/youtube-main.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'todo', pathMatch: "full" },
            { path: 'todo', component: TodoMainComponent },
            { path: 'youtube', component: YoutubeMainComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class appRouterModule {

}