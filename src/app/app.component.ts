import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'pj-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'clickHandler()',
    '(document:keydown)': 'toggleKeyboard($event)',
    class: 'app-content-projection',
  },
})
export class AppComponent {
  public counter = signal<number>(0);
  public clickHandler(): void {
    console.log('click on app host');
  }

  public toggleKeyboard(event: KeyboardEvent): void {
    if (event.key === 'n') {
      this.counter.update((count: number) => count + 1);
    }
  }
}
