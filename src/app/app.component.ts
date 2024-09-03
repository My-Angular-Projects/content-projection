import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'pj-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //
}
