import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { About } from '../../components/about/about';
import { Features } from '../../components/features/features';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
// import { ImpactStats } from '../../components/impact-stats/impact-stats';
import { Projects } from '../../components/projects/projects';
import { Supporters } from '../../components/supporters/supporters';

@Component({
  selector: 'app-home',
  imports: [Header,
    Hero,
    // ImpactStats,
    Features,
    About,
    Supporters,
    Projects,
    Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
