import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  template: '<iframe [src]="pdfSrc" style="width:100%; height:100vh;" frameborder="0"></iframe>',
})
export class PdfViewerComponent implements OnInit {
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // Subscribe to route data to get the PDF source URL.
    this.route.data.subscribe(data => {
      // Bypass Angular's security to trust the resource URL.
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data['pdfSrc']);
    });
  }
}
