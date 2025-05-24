import { Component } from '@angular/core';
import { ExperienceComponent } from '../../shared/components/experience/experience.component';
import { TrainingComponent } from '../../shared/components/training/training.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [ExperienceComponent, TrainingComponent, CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  options = [
    { label: 'Trabalho', value: 'trabalho' },
    { label: 'Estudos/Certificações', value: 'estudo' }
  ];

  selected = 'trabalho'; 
}
