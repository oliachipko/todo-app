import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  item = '';
  listItemArray:  string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  addItem(){
    this.listItemArray.push(this.item);
  }

  deleteItem(index: number){
    this.listItemArray.splice(index, 1);
  }

}
