import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
 
  features = [
    {
      icon: 'bi-book',
      img: '/images/s3.svg', 
      title: 'Education',
      desc: 'Fermentum nisl accumsan nisi sapien.'
    },
    {
      icon: 'bi-laptop',
      img: '/images/s4.svg', 
      title: 'Career Classes',
      desc: 'Ultricies lacus turpis morbi tempor.'
    },
    {
      icon: 'bi-award',
      img: '/images/s2.svg', 
      title: 'Scholarships',
      desc: 'Adipiscing vitae neque eget.'
    },
    {
      icon: 'bi-heart',
      img: '/images/s1.svg', 
      title: 'Mentorships',
      desc: 'Nunc tristique quis leo duis gravida.'
    }
  ];
}
