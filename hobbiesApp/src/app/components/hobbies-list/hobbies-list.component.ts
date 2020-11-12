import { Component, OnInit } from '@angular/core';
import { hobbies } from '../../data/hobbies';
import { HobbyItem } from '../../interfaces/hobby-item';

@Component({
  selector: 'app-hobbies-list',
  templateUrl: './hobbies-list.component.html',
  styleUrls: ['./hobbies-list.component.css'],
})
export class HobbiesListComponent implements OnInit {
  hobbiesList = hobbies;
  sortedHobbiesList: HobbyItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortedHobbiesList = this.hobbiesList.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
}
