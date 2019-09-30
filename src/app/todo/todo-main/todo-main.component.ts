import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent {

  @ViewChild("frm", { static: false }) form: NgForm

  todoList: any[] = [];
  indexToEdit = null;

  submitTodo() {
    const todo = this.form.value.todoText;
    if (todo === '') {
      alert("please add todo")
    } else if (this.todoList.indexOf(todo) !== -1) {
      alert("Todo already exists")
    } else {
      if (this.indexToEdit !== null) {
        this.todoList[this.indexToEdit] = todo;
        this.form.setValue({
          todoText: ''
        });
        this.indexToEdit = null;
      } else {
        this.todoList.push(todo);
        this.form.setValue({
          todoText: ''
        });
      }
    }

  }

  handleRemoveTodo(index: number) {
    this.todoList.splice(index, 1)
  }

  handleEditTodo(val) {
    const todo = val.todo;
    const index = val.index;
    this.form.setValue({
      todoText: todo
    })
    this.indexToEdit = index;
  }

}
