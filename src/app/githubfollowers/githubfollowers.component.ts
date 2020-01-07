import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../Services/followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  public followers : any = [];

  constructor(private followersService : FollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe();

    this.route.queryParamMap.subscribe();

    this.followersService.getFollowers().subscribe((data) =>{
      this.followers = data;
    });
  }

}
