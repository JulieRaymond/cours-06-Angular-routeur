import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  studentName: string | null = null;
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
      this.studentName = params.get('studentName');
    });
  }
}
