import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  idade!: number;
  tempo!: number;

  ngOnInit(): void {
    const nascimento = new Date(2005, 3, 8); 
    const hoje = new Date();
    this.idade = hoje.getFullYear() - nascimento.getFullYear();
    const aniversarioEsteAno = new Date(hoje.getFullYear(), 3, 8);
    if (hoje < aniversarioEsteAno) {
      this.idade--;
    }

    const inicioTech = new Date(2023, 1, 1);
    let anos = hoje.getFullYear() - inicioTech.getFullYear();
    if (hoje.getMonth() < inicioTech.getMonth() || (hoje.getMonth() === inicioTech.getMonth() && hoje.getDate() < inicioTech.getDate())) {
      anos--;
    }
    this.tempo = anos;
  }
}
