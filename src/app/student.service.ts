import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Student } from './student';
import { STUDENTS } from './mock-students';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    const heroes = of(STUDENTS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
