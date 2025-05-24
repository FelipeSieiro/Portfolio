import { Component } from '@angular/core';
import { Experience } from './experience';
import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-experience',
  imports: [Timeline],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
   events: Experience[];

  constructor() {
    this.events = [
      {
        cargo: 'WEB Architecture I',
        empresa: 'F1RST Digital Services',
        data: '11/2024 – Presente',
        color: '#008a90'
      },
      {
        cargo: 'Estagiário WEB Architecture',
        empresa: 'F1RST Digital Services',
        data: '10/2023 – 11/2024',
        color: '#00ADB5'
      },
      {
        cargo: 'Jovem Aprendiz',
        empresa: 'TECBAN Serviços Integrados',
        data: '05/2023 – 10/2023',
        color: '#393E46'
      }
    ];
  }
}
