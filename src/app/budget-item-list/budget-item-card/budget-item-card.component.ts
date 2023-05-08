import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetITem } from 'src/shared/modals/budgets-items.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent {
  @Input() item: BudgetITem | any;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  onXButtonclick() {
    this.xButtonClick.emit();
  }
  onCardClick() {
    this.cardClick.emit();
  }
}
