import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'followers/:userId/:id', component: GithubprofileComponent },
    { path: 'followers', component: GithubfollowersComponent },
    { path: 'posts', component: PostsComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
