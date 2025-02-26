import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-contactme',
  imports: [ButtonModule, CarouselModule, CardModule, SplitterModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
  profile = [
    {
      image: 'Images/AZPic.jpg', // Replace with your image URL
      name: 'Abdul Zahid Shaik',
      title: 'Software Engineer',
      description: 'A passionate software engineer with an M.S. in Computer Science...',
      link: 'https://www.linkedin.com/in/abdulzahidshaik/' // Replace with your link
    }
  ];

}
