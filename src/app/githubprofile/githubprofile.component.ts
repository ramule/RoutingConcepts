import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  constructor(private  route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      let id = +data.get('username');
      console.log(id);
    })
  }

  submitBtn(){
    this.router.navigate(['/followers'], {
      queryParams: {page:1, orders: 'newest'}
    })
  }

}
