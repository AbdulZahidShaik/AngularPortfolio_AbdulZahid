import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { EducationComponent } from './education/education.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AnimateOnScrollModule, ScrollTopModule, HeaderComponent, MainPageComponent, ExperienceComponent, ProjectsComponent, ContactmeComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
