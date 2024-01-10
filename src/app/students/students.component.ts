import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { Student } from '../student';
import {STUDENTS} from '../mock-students';
import {StudentDetailComponent} from "../student-detail/student-detail.component";

@Component({
  standalone: true,
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    StudentDetailComponent,
  ],
})

export class StudentComponent {
  students = STUDENTS;
  selectedStudent?: Student;

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
