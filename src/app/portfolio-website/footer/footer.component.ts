import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  youtubeLink = 'https://youtube.com';
  emailAddress = 'deepsingh34731@gmail.com';
constructor(public router:Router){

}

onHome(){
  this.router.navigate(["./portfolio-website/home"]).then(()=>{
    setTimeout(()=>{
      window.scrollTo({top:0,behavior:'smooth'});
    },400);
  });
    }

    onAbout(){
  
      this.router.navigate(['./portfolio-website/about'])
    }
    onContact(){
  
      this.router.navigate(['./portfolio-website/contact'])
    }
}
