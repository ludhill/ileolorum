import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
/*
private currentSection = 0; // Inicialize com 0 para corresponder ao índice do array

constructor(private router: Router) {}

@HostListener('window:scroll', [])
onWindowScroll(): void {
  const sections = document.querySelectorAll('.section');
  console.log('Seções:', sections);
  
  if (sections.length === 0) {
    return; // Se não houver seções, saia
  }

  const currentSectionElement = sections[this.currentSection];
  const nextSectionElement = sections[this.currentSection + 1];

  if (nextSectionElement && this.isElementMostlyInViewport(currentSectionElement)) {
    console.log('Próxima seção em viewport:', nextSectionElement);
    this.currentSection++;
    this.scrollToSection(nextSectionElement);
  } else if (!nextSectionElement) {
    console.log('Não há mais seções a serem roladas');
  }
}

private isElementMostlyInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const threshold = 50; // Ajuste este valor conforme necessário
  return (
    rect.top + threshold >= 0 &&
    rect.left >= 0 &&
    rect.bottom - threshold <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

private scrollToSection(section: Element): void {
  console.log('Rolando para a seção:', section);
  section.scrollIntoView({ behavior: 'smooth' });
}
*/
}
