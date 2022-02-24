import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-friend',
    templateUrl: './friend.page.html',
    styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {
    friends = [
        { "name": "Phakpoom I.", "email": "beerbc16@gmail.com" },
        { "name": "Supanan T.", "email": "supanant@gmail.com" },
        { "name": "Kairika W.", "email": "kairikaw@gmail.com" },
        { "name": "Sitthichai N.", "email": "sitthichain@gmail.com" },
        { "name": "Tida T", "email": "tidat@gmail.com" }
    ];
    constructor(private router: Router) { }

    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['/']);
    }
    showDetails(friend){
        this.router.navigate(['/friend-detail', friend]);
    }
}
