import { Component } from '@angular/core';
declare var Prism: any;
@Component({
  selector: 'app-syntax',
  imports: [],
  templateUrl: './syntax.component.html',
  styleUrl: './syntax.component.css'
})
export class SyntaxComponent {
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
