import {Component} from '@angular/core';
import {Tile, TileType} from './team-tile-model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  TileType = TileType;

  tileArr: Tile[] = TILES;
}

const MALE_URL = 'assets/img/man.jpg';
const FEMALE_URL = 'assets/img/woman.jpg';

const TILES = [
  {
    type: TileType.HEADER,
    tileName: 'Team'
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Janusz Gajos',
    empPosition: 'Co Founder',
    empPhotoUrl: MALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Seweryn Kulec',
    empPosition: 'Co Founder',
    empPhotoUrl: MALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Andrzej Pawlikowski',
    empPosition: 'Co Founder',
    empPhotoUrl: MALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Paulina Mendrek',
    empPosition: 'Co Founder',
    empPhotoUrl: FEMALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Karolina Cichopek',
    empPosition: 'Co Founder',
    empPhotoUrl: FEMALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Marcin Daniel',
    empPosition: 'Co Founder',
    empPhotoUrl: MALE_URL,
  },
  {
    type: TileType.EMPTY,
  },
];
