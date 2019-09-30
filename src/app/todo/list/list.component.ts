import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todo;
  @Input() index;
  @Output() removeTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTodoEle() {
    this.removeTodo.emit(this.index);
  }

  editTodoEle() {
    this.editTodo.emit({ todo: this.todo, index: this.index })
  }

}
