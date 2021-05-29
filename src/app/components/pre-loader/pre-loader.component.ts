import { Component, OnInit } from '@angular/core';
declare var gsap: any;

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.scss']
})
export class PreLoaderComponent implements OnInit {
  showPreLoader = true;
  constructor() { }

  ngOnInit(): void {
    const preloaderTL = gsap.timeline();
    preloaderTL.to('#logo', { xPercent: -20, opacity: 0, delay: 3 })
    preloaderTL.to('.preloader', { transform: 'scaleX(0)', transformOrigin: 'top', delay: '-=3' })
    setTimeout(() =>{
      this.showPreLoader = false;
    },5000)
  }


}
