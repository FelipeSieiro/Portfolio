import { Component } from '@angular/core';
import { Training } from './training';
import { Timeline } from 'primeng/timeline';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  imports: [Timeline, CommonModule],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  events: Training[];

    constructor() {
      this.events = [
       {
          curso: 'AWS Cloud Fundation',
          faculdade: 'Amazon web Services',
          data: 'out/2024',
          color: '#393E46'
        },
       {
          curso: 'Análise e Desenvolvimento de Sistemas',
          faculdade: 'FIAP',
          data: 'Fev/2023 – Dez/2024',
          color: '#008a90'
        },
        {
          curso: 'Liderança e desenvolvimento de competências',
          faculdade: 'FIAP',
          data: '80h – Julho de 2024',
          color: '#222831'
        },
        {
          curso: 'A partir do zero: HTML e CSS para projetos web',
          faculdade: 'Alura',
          data: '53h – Maio de 2024',
          color: '#393E46'
        },
        {
          curso: 'Professional Qualification Certificate in Web 2.0 Developer and Designer',
          faculdade: 'FIAP',
          data: 'Dezembro de 2023',
          color: '#00ADB5'
        },
        {
          curso: 'Professional Qualification Certificate in System Analysis and Web Prototyping',
          faculdade: 'FIAP',
          data: 'Julho de 2023',
          color: '#008a90'
        },
      ];
    }
}
