import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pj-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {}
