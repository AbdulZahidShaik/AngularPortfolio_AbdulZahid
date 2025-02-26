import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule, ButtonModule, CardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  profile: any[] = [
    {
      image: 'Images/AZPic.jpg',
      name: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com'
    },
    {
      image: 'Images/AZPic.jpg',
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://github.com'
    },
    {
      image: 'Images/AZPic.jpg',
      name: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://github.com'
    }
    // Add more projects as needed
  ];

}
