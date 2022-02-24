import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
    data: any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
      
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        console.log("pppppp");
        console.log(params);
        this.data = params;
    });
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
