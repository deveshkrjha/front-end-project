import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Weather Forecast App', description: 'Build a weather forecast application that provides users with real-time weather updates for their location. Include features like current weather conditions, hourly and daily forecasts, weather alerts, and support for multiple locations.' },
    { name: 'Task Management App', description: 'Designed and build a task management application that allows users to create, organize, and prioritize tasks. Include features like user authentication, task categorization, due date reminders, and task progress tracking.' },
    { name: 'E-commerce Website', description: 'Created a fully functional e-commerce website where users can browse products, add them to cart, and make purchases securely. Implement features such as user authentication, product search, sorting/filtering options, and payment gateways integration.' },
  ];
}
