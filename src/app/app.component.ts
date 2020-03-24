import {AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {AnimationUtils} from './shared/utils/animation-utils';
import {Rect} from './core/model/api-models';
import {AnimationElementsService} from './core/services/animation-elements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sideLogo', { static: true }) sideLogo: ElementRef;

  logoRightPos: number;

  constructor(private animationService: AnimationElementsService, private renderer: Renderer2, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.calculateLogoRightPosition();
  }

  private calculateLogoRightPosition() {
    const width = this.sideLogo.nativeElement.getBoundingClientRect().width;
    this.logoRightPos = width * -0.17;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    AnimationUtils.animateLogo(this.animationService.logoRect, event, this.el);
  }
}
