import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent {
  @Input() budgetItems: BudgetITem[] | any;
  @Output() delete: EventEmitter<BudgetITem> = new EventEmitter<BudgetITem>();

  onDeleteButtonClicked(item: BudgetITem) {
    this.delete.emit(item);
  }
}
