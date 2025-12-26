import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  //styleUrl: './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class HomeComponent {
  exibirFooter: boolean = false; // Controle do footer

  toggleFooter() {
    this.exibirFooter = !this.exibirFooter;
  }
  
  isDarkMode = false; 
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}


/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
*/