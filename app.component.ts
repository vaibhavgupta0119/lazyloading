import { Component,OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lazy';
  showLoader: Boolean = false;
  public dispaly=Array(50);
  public display2=Array(50);
  @HostListener('window:scroll', [''])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.showLoader= true;
            this.display.push(this.display2)
            setTimeout(() => this.showLoader = false, 2000)
        }
    }
    ngOnInit(){}
    
  
  }