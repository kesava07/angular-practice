import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @ViewChild("searchTerm", { static: false }) searchTerm: NgForm;
  @Output() getSearchText = new EventEmitter()


  submitSearch() {
    const value = this.searchTerm.value.search;
    this.getSearchText.emit(value);
  }

}
