import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './Components/app.component';
import { MyComponent} from './Components/my-component.component';
import {TodosComponent} from './Components/todos.components';
import {FormaComponent} from './Components/forma.component';
import {PhotosComponent} from './photos/photos.component';
import {VideoComponent} from './video/video.component';
import {AlbumsComponent} from './albums/albums.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './albums/pagenotfound.component';

const appRoutes: Routes = [{ path: 'photos', component: PhotosComponent },
                   { path: 'videos', component: VideoComponent },
                   { path: 'albums', component: AlbumsComponent },
                   { path: '', redirectTo: '/photos', pathMatch: 'full'},
                   { path: '**', component: PageNotFoundComponent } ];



@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    TodosComponent,
    FormaComponent,
    PhotosComponent,
    AlbumsComponent,
    VideoComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
