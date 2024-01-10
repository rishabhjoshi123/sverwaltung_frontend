import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class StudentDetailComponent {
  @Input() student?: Student;
}
