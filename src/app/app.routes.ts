import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PdfViewerComponent } from './pages/pdf-viewer/pdf-viewer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'resume.pdf',
    component: PdfViewerComponent,
    data: { pdfSrc: '/assets/files/resume.pdf' },
  },
];
