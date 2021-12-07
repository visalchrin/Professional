import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class SearchService {
  list_users: any[] = [];
  constructor(private router: Router) {}

  getListSearch() {
    return this.list_users;
  }
}
