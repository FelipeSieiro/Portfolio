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
        "status": "WEB Architecture JR – F1RST Digital Services",
        "date": "11/2024 – Presente",
        "color": "#008a90",
        "description": "Suporte e definição de arquiteturas Angular, boas práticas em desenvolvimento web e evolução de aplicações internas. Criação da arquitetura de referência para i18n no Santander Brasil."
      },
      {
        "status": "Estagiário WEB Architecture – F1RST Digital Services",
        "date": "10/2023 – 11/2024",
        "color": "#008a90",
        "description": "Documentação de arquitetura Front-End, suporte técnico Angular, melhoria de portais internos, testes unitários e E2E. Atuação com Scrum e Kanban."
      },
      {
        "status": "Jovem Aprendiz – TECBAN Serviços Integrados",
        "date": "05/2023 – 10/2023",
        "color": "#008a90",
        "description": "Atuação em rotinas administrativas, desenvolvendo habilidades de organização, comunicação e trabalho em equipe."
      }
    ];
  }
}
