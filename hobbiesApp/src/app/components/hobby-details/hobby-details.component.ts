import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hobbies } from '../../data/hobbies';
import { HobbyItem } from '../../interfaces/hobby-item'

@Component({
  selector: 'app-hobby-details',
  templateUrl: './hobby-details.component.html',
  styleUrls: ['./hobby-details.component.css'],
})
export class HobbyDetailsComponent implements OnInit {
  hobbiesList = hobbies;
  idFromParams: string = '';
  hobbyById: HobbyItem;

  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.idFromParams = params['id'];
    });
    this.hobbyById = this.hobbiesList.find(({ id }) => id === +this.idFromParams);
  }

}
