import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  studentName: string | null = null;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentName = params.get('studentName');
    });
  }

  // OU AUTRE METHODE AVEC LE CONSTRUCTEUR + SIMPLE
  // studentName: string = '';

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.studentName = params['studentName'];
  //   });
}
