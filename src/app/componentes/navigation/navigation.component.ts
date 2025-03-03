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