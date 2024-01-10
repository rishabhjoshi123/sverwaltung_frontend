import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    { id: 1, name: 'Sample Entry 1' },
    { id: 2, name: 'Sample Entry 2' }
  ];

  addEntry() {
    const newId = this.data.length ? Math.max(...this.data.map(item => item.id)) + 1 : 1;
    this.data.push({ id: newId, name: `Sample Entry ${newId}` });
  }

  editEntry(entry) {
    const index = this.data.findIndex(item => item.id === entry.id);
    if (index > -1) {
      // Mock editing for now. In a real scenario, you'd open a modal or a form to edit.
      this.data[index].name = `${this.data[index].name} - Edited`;
    }
  }

  deleteEntry(entry) {
    const index = this.data.findIndex(item => item.id === entry.id);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
}
