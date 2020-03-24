import {Rect} from '../../core/model/api-models';
import {ElementRef} from '@angular/core';

export class AnimationUtils {

  static mouseInRect = (element: Rect, mouseEvent: MouseEvent, padding?: number): boolean => {
    const mouseX = mouseEvent.x;
    const mouseY = mouseEvent.y;
    const startX = padding ? element.startX - padding : element.startX;
    const startY = padding ? element.startY - padding : element.startY;
    const endX = padding ? element.endX + padding : element.endX;
    const endY = padding ? element.endY + padding : element.endY;

    if (mouseX >= startX && mouseX <= endX && mouseY >= startY && mouseY <= endY) {
      return true;
    }
    return false;
  }

  static animateLogo = (element: Rect, event: MouseEvent, ref: ElementRef) => {
    if (AnimationUtils.mouseInRect(element, event, 80)) {
      const elementStyle = ref.nativeElement.querySelector('.header-logo').style;
      const newX = event.x - element.startX - element.width;
      const newY = event.y - element.startY - element.height;
      elementStyle.transform = `scale(1.1) translate(${0.3 * newX}px, ${0.3 * newY}px)`;
      element.moving = true;
    } else {
      if (element.moving) {
        const elementStyle = ref.nativeElement.querySelector('.header-logo').style;
        elementStyle.transition = `0.3s`;
        elementStyle.transform = `translate(0px, 0px)`;
        setTimeout(() => {
          elementStyle.transition = '';
          element.animating = false;
          element.moving = false;
        }, 300);
      }
    }
  }
}


