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

const Adam = 'assets/img/team/Febrit/20200605_141813.jpg';
const Seweryn = 'assets/img/team/Febrit/20200605_130015.jpg';
const Bartosz = 'assets/img/team/Febrit/20200605_124444.jpg';
const Wojciech = 'assets/img/team/Febrit/20200605_143112.jpg';
const Marcin = 'assets/img/team/Febrit/20200625_092611.jpg';
const Maciej = 'assets/img/team/Febrit/20200630_163013.jpg';

const TILES = [
  {
    type: TileType.HEADER,
    tileName: 'Team'
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Seweryn Kulec',
    empPosition: 'CEO Founder',
    empPhotoUrl: Seweryn,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Bartosz Słysz',
    empPosition: 'Frontend Developer',
    empPhotoUrl: Bartosz,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Adam Krupa',
    empPosition: 'CTO Co Founder',
    empPhotoUrl: Adam,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Wojciech Jakubek',
    empPosition: 'Frontend Developer',
    empPhotoUrl: Wojciech,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Marcin Rumierz',
    empPosition: 'UI/UX Designer',
    empPhotoUrl: Marcin,
  },
  {
    type: TileType.EMPTY,
  },
  {
    type: TileType.EMPLOYEE,
    empName: 'Aleksander Jewuła',
    empPosition: 'Tester',
    empPhotoUrl: Maciej,
  },
  {
    type: TileType.EMPTY,
  },
];
