import {AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import { HeaderOption } from './model/header-option';
import { HEADER_OPTIONS } from '../../app-settings';
import {AnimationElementsService} from '../services/animation-elements.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('logo', { static: true }) logo: ElementRef;

  options: HeaderOption[] = HEADER_OPTIONS;

  constructor(private animationElementsService: AnimationElementsService) {
  }

  ngAfterViewInit() {
    const logo = this.logo.nativeElement;
    const logoX = logo.offsetLeft;
    const logoY = logo.offsetTop;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;
    this.animationElementsService.logoRect = {
      startX: logoX,
      startY: logoY,
      endX: logoX + logoWidth,
      endY: logoY + logoHeight,
      width: logoWidth,
      height: logoHeight,
      animating: false,
      moving: false
    };
  }
}

