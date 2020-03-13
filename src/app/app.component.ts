import {Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {AnimationUtils} from './shared/utils/animation-utils';
import {Rect} from './core/model/api-models';
import {AnimationElementsService} from './core/services/animation-elements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private animationService: AnimationElementsService, private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    AnimationUtils.animateLogo(this.animationService.logoRect, event, this.el);
  }
}

// const sth = () => {
//
// }
