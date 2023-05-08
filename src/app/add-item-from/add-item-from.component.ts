import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';

@Component({
  selector: 'app-add-item-from',
  templateUrl: './add-item-from.component.html',
  styleUrls: ['./add-item-from.component.scss'],
})
export class AddItemFromComponent {
  @Input() item: BudgetITem = new BudgetITem('', 0);
  @Output() formSubmit: EventEmitter<BudgetITem> =
    new EventEmitter<BudgetITem>();

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
