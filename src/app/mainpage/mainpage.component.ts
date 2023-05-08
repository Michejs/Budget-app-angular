import { Component } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  budgetItems: BudgetITem[] = new Array<BudgetITem>();

  addItem(newItem: BudgetITem) {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetITem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }
}
