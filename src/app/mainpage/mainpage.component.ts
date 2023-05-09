import { Component } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  budgetItems: BudgetITem[] = new Array<BudgetITem>();

  totalBudget: number = 0;

  addItem(newItem: BudgetITem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetITem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }
  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
