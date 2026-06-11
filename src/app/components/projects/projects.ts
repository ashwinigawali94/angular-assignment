import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
 projects = [
    {
      title: 'Renewable Tech Bootcamp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/p3.svg'
    },
    {
      title: 'Women in Data Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/p2.svg'
    },
    {
      title: 'Scholarship Program: Rural Areas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/p1.svg'
    }
  ];
}
