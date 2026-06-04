import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from './experience';
import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, Timeline],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
   events: Experience[];

  constructor() {
    this.events = [
      {
        cargo: 'WEB Architecture I',
        empresa: 'F1RST Digital Services',
        data: '11/2024 – Presente',
        color: '#008a90',
        topicos: [
          'Liderança técnica em projetos de front-end corporativo',
          'Construção de componentes Angular escaláveis',
          'Melhoria de performance e acessibilidade em aplicações internas'
        ]
      },
      {
        cargo: 'Estagiário WEB Architecture',
        empresa: 'F1RST Digital Services',
        data: '10/2023 – 11/2024',
        color: '#00ADB5',
        topicos: [
          'Apoio no desenvolvimento de layouts responsivos',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'Documentação de fluxos e padrões de UI'
        ]
      },
      {
        cargo: 'Jovem Aprendiz',
        empresa: 'TECBAN Serviços Integrados',
        data: '05/2023 – 10/2023',
        color: '#393E46',
        topicos: [
          'Suporte em projetos de digitalização de processos',
          'Lorem ipsum dolor sit amet',
          'Colaboração com times de design e produtos'
        ]
      }
    ];
  }
}
