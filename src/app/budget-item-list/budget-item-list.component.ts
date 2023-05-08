import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent {
  @Input() budgetItems: BudgetITem[] | any;
  @Output() delete: EventEmitter<BudgetITem> = new EventEmitter<BudgetITem>();

  constructor(public dialog: MatDialog) {}
  onDeleteButtonClicked(item: BudgetITem) {
    this.delete.emit(item);
  }
  onCardClicked(item: BudgetITem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
