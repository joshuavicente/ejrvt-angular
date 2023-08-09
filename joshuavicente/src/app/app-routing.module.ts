import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PdfViewerComponent } from './pages/pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume.pdf', component: PdfViewerComponent, data: { pdfSrc: '/assets/files/Joshua_Vicente_Resume.pdf' } },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:tag', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
