import { GiphyService } from './shared/services/giphy.service';
import { Component, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PicturesComponent } from './components/pictures/pictures.component';
import { HeaderComponent } from './components/header/header.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
	selector: 'pic-root',
	standalone: true,
	imports: [CommonModule, PicturesComponent, HeaderComponent, AsyncPipe],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	private giphyService = inject(GiphyService);
	filterPhraze = signal('');

	pictures = toObservable(this.filterPhraze).pipe(
		switchMap(filterPhraze =>
			filterPhraze === ''
				? this.giphyService.getTrendingPictures()
				: this.giphyService.getSeachedPictures(filterPhraze)
		)
	);

	onFilterChanged(filterPhraze: string): void {
		this.filterPhraze.set(filterPhraze);
	}
}
