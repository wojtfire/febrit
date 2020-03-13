import {Injectable} from '@angular/core';
import {Rect} from '../model/api-models';

@Injectable({ providedIn: 'root' })
export class AnimationElementsService {
  logoRect: Rect = { } as Rect;
}
