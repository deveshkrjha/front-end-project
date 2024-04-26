import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(public router:Router){

}

desiredRoute = "./portfolio-website/home";

  onHome(){
this.router.navigate(['./portfolio-website/home'])
  }
  onSkills(){

  this.router.navigate(['./portfolio-website/home']).then(()=>{
    setTimeout(()=>{
      const skillSelection=document.getElementById('skills-section')
      if(skillSelection){
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'})
      }
    },200);
  });

  }
  onAbout(){

    this.router.navigate(['./portfolio-website/about'])
  }
  onContact(){

    this.router.navigate(['./portfolio-website/contact'])
  }
  
}
