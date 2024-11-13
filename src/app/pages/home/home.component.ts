import { Component, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobs } from 'src/app/models/job-data.model';
import { projects } from 'src/app/models/project-data.model';

export interface Job {
  date: string;
  link: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  img: string;
  imgName: string;
  link: string;
  title: string;
  description: string;
  skills: string[];
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  currentSection = 'about';
  jobs: Job[] = jobs;
  projects: Project[] = projects;

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly router: Router
  ) {}

  ngAfterViewInit() {                                                                                
    this.route.fragment.subscribe((fragment: string | null) => {
      setTimeout(() => {
        this.scrollToFragment(fragment ?? 'about');
      }, 50);
    });
  }

  navigateTo(fragment: string): void {
    this.router.navigate(['/'], { fragment: fragment, skipLocationChange: false }).then(() => {
      this.router.navigate(['/'], { fragment: fragment });
    });
  }

  private scrollToFragment(fragment: string): void {
    this.currentSection = fragment;
    const targetElement = document.getElementById(fragment);
    if (targetElement) {
      const yOffset = -100;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const threshold = window.innerHeight * 0.5;

    if (position + threshold >= this.getPosition('about') && position + threshold < this.getPosition('experience')) {
        this.currentSection = 'about';
    } else if (position + threshold >= this.getPosition('experience') && position + threshold < this.getPosition('projects')) {
        this.currentSection = 'experience';
    } else if (position + threshold >= this.getPosition('projects')) {
        this.currentSection = 'projects';
    }
  }

  private getPosition(sectionId: string): number {
    const el = document.getElementById(sectionId);
    return el ? el.offsetTop : 0;
  }
}