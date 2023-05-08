import { Component, Input } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent {
  @Input() item: BudgetITem | any;

  onSubmitted(updatedItem: BudgetITem) {}
}
