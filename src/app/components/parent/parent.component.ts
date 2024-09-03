import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'pj-parent',
  standalone: true,
  imports: [ActionsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {}
