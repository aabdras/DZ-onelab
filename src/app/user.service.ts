import { Injectable } from '@angular/core';
import {DatePipe} from "@angular/common";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data: User[] = [
    {
      name: 'Jonas', login: 'js', password: '1111',
      type: ['DEPOSIT', 'DEPOSIT', 'WITHDRAWAL', 'DEPOSIT', 'WITHDRAWAL', 'WITHDRAWAL', 'DEPOSIT','DEPOSIT'],
      movements: [1000, 2700, -7800, 5000, -6800, -780, 7000, 13000],
      movementsDates: [
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
      ]
    }
    ,
    {
      name: 'Aizat', login: 'az', password: '2222',
      type: ['DEPOSIT', 'DEPOSIT', 'WITHDRAWAL', 'DEPOSIT', 'WITHDRAWAL', 'WITHDRAWAL', 'DEPOSIT','DEPOSIT'],
      movements: [1000, 2700, -7800, 5000, -6800, -780, 7000, 13000],
      movementsDates: [
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
      ]
    },
    {
      name: 'Erzat', login: 'ez', password: '3333',
      type: ['DEPOSIT', 'DEPOSIT', 'WITHDRAWAL', 'DEPOSIT', 'WITHDRAWAL', 'WITHDRAWAL', 'DEPOSIT','DEPOSIT'],
      movements: [1000, 2700, -7800, 5000, -6800, -780, 7000, 13000],
      movementsDates: [
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
        this.datepipe.transform('2019-04-01T10:17:24.185Z', 'dd/MM/yyyy'),
      ]
    },
  ]

  getData(): User[] {
    return this.data
  }

  constructor(private datepipe: DatePipe) {
  }
}
