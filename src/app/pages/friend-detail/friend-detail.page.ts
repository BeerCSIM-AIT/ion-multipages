import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.page.html',
  styleUrls: ['./friend-detail.page.scss'],
})
export class FriendDetailPage implements OnInit {
    friend:any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        console.log("pppppp");
        console.log(params);
        this.friend = params;
    });
  }

  goBack(){
    this.router.navigate(['/friend']);
  }

}
