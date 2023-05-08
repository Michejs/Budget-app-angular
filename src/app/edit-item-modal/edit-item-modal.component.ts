import { Component, Inject, Input } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetITem
  ) {}
  onSubmitted(updatedItem: BudgetITem) {
    this.dialogRef.close(updatedItem);
  }
}
