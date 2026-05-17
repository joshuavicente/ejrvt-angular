import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PdfViewerComponent } from './pages/pdf-viewer/pdf-viewer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    PdfViewerComponent,
  ],
  providers: [],
  standalone: true,
  bootstrapComponent: AppComponent,
})
export class AppModule {}
