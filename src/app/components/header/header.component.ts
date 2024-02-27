import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	EventEmitter,
	OnInit,
	Output,
	inject,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'pic-header',
	standalone: true,
	imports: [
		MatToolbarModule,
		MatIconModule,
		MatInputModule,
		ReactiveFormsModule,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@Output() filterChanged = new EventEmitter<string>();
	private destroyRef = inject(DestroyRef);

	filterInput = new FormControl('', { nonNullable: true });

	ngOnInit(): void {
		this.filterInput.valueChanges
			.pipe(
				debounceTime(400),
				distinctUntilChanged(),
				takeUntilDestroyed(this.destroyRef)
			)
			.subscribe(filterPhraze => {
				this.filterChanged.emit(filterPhraze);
			});
	}
}
