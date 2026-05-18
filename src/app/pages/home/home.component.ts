import {
  Component,
  AfterViewInit,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '@app/services/portfolio.service';
import { Job, Project } from '@app/models/portfolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements AfterViewInit {
  // Service Injectors
  private portfolioService = inject(PortfolioService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // State
  currentSection = 'about';
  jobs = signal<Job[]>([]);
  projects = signal<Project[]>([]);

  ngOnInit() {
    // Fetch Jobs from MongoDB
    this.portfolioService.getJobs().subscribe({
      next: (data) => this.jobs.set(data),
      error: (err) => console.error('Failed to load jobs', err),
    });

    // Fetch Projects from MongoDB
    this.portfolioService.getProjects().subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error('Failed to load projects', err),
    });
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      setTimeout(() => {
        this.scrollToFragment(fragment ?? 'about');
      }, 50);
    });
  }

  /**
   * Navigates to a specific section by updating the URL fragment and then scrolling to it.
   * @param fragment
   */
  navigateTo(fragment: string): void {
    this.router
      .navigate(['/'], { fragment: fragment, skipLocationChange: false })
      .then(() => {
        this.router.navigate(['/'], { fragment: fragment });
      });
  }

  /**
   * Scrolls smoothly to the section corresponding to the given fragment ID.
   * @param fragment
   */
  private scrollToFragment(fragment: string): void {
    this.currentSection = fragment;
    const targetElement = document.getElementById(fragment);
    if (targetElement) {
      const yOffset = -100;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  /**
   * Listens to window scroll events and updates the currentSection based on the scroll position relative to the sections' positions.
   * This allows the navigation links to highlight based on the currently viewed section.
   * The threshold is set to half the viewport height to trigger section changes as the user scrolls.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const threshold = window.innerHeight * 0.5;

    if (
      position + threshold >= this.getPosition('about') &&
      position + threshold < this.getPosition('experience')
    ) {
      this.currentSection = 'about';
    } else if (
      position + threshold >= this.getPosition('experience') &&
      position + threshold < this.getPosition('projects')
    ) {
      this.currentSection = 'experience';
    } else if (position + threshold >= this.getPosition('projects')) {
      this.currentSection = 'projects';
    }
  }

  /**
   * Helper method to get the vertical position of a section by its ID. Returns 0 if the element is not found.
   * @param sectionId
   * @returns
   */
  private getPosition(sectionId: string): number {
    const el = document.getElementById(sectionId);
    return el ? el.offsetTop : 0;
  }
}
