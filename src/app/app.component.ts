import { Component} from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
