import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {AnimationUtils} from './shared/utils/animation-utils';
import {Rect} from './core/model/api-models';
import {AnimationElementsService} from './core/services/animation-elements.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(800, style({opacity: 1}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('sideLogo', { static: true }) sideLogo: ElementRef;

  logoRightPos: number;

  constructor(private animationService: AnimationElementsService, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    this.calculateLogoRightPosition();
  }

  private calculateLogoRightPosition() {
    const width = this.sideLogo.nativeElement.getBoundingClientRect().width;
    this.logoRightPos = width * -0.175;
    console.log(this.sideLogo.nativeElement.getBoundingClientRect())
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    AnimationUtils.animateLogo(this.animationService.logoRect, event, this.el);
  }

  @HostListener('resize')
  onResize() {
    this.calculateLogoRightPosition();
  }
}
