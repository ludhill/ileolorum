import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navigation.component.html',
  //styleUrl: './navigation.component.css'
  styleUrl: './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class NavigationComponent {

}

/*

import { Component,input,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  //imports: [CommonModule],
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  //styleUrl: './navbar.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class NavbarComponent {

}

*/