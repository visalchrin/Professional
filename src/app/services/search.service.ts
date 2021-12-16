import { ApplicationRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private router: Router) {}

  list_users: any = [
    {
      id: '01',
      name: 'Visal',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
    {
      id: '02',
      name: 'Kimchhay',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
    {
      id: '03',
      name: 'Kongden',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
    {
      id: '04',
      name: 'Kiri',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
    {
      id: '05',
      name: 'Linna',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
    {
      id: '06',
      name: 'Elon Musk',
      career: 'Computer Science',
      pic: '../../../assets/future.jpg',
    },
  ];
  Photoes = [
    {

    }
  ]

  getAllUsers() {
    return this.list_users;
  }

}
