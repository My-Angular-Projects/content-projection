import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pj-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {}
