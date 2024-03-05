import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';

  router: Router = inject(Router);
  // OU AVEC LE CONSTRUCTEUR + SIMPLE
  // constructor(private router: Router) { }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.router.navigate(['/wcs', this.searchTerm.trim()]);
    }
  }
}
