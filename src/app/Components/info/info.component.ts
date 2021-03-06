import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  numberOfProducts: number;
  constructor(private router: Router,private r: ActivatedRoute) {
    this.numberOfProducts = 0;
   }

  ngOnInit(): void {
  }

  changeNumberOfProducts(e: any){
    this.numberOfProducts = e.target.value;
  }

  submit(){
    if(this.numberOfProducts > 0){
      sessionStorage.setItem('numberOfProducts', JSON.stringify(this.numberOfProducts));
      this.router.navigate(["../home"],{relativeTo: this.r});
    }
  }

}
