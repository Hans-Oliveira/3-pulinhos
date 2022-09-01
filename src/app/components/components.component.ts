import { Component, OnInit } from '@angular/core';

import { get } from '../json';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.sass']
})
export class ComponentsComponent implements OnInit {
  
  get: get[] = []

  constructor(private listService: ListService) { 
    this.getApi()
    console.log(this.get)
  }
  

  ngOnInit(): void {
  }

  getApi() {
    this.listService.getAll().subscribe((get) => {
      get.json
      return this.get = get.data
    })
  }


}
