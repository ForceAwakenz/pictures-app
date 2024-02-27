import { Picture } from '@src/app/shared/model/picture';
import { Injectable, inject } from '@angular/core';
import { GiphyApiService } from './giphy-api.service';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GiphyService {
	private giphyApiService = inject(GiphyApiService);

	getSeachedPictures(searchPhraze: string): Observable<Picture[]> {
		return this.giphyApiService
			.getSeachedPictures(searchPhraze)
			.pipe(map(apiPics => apiPics.map(Picture.toPicture)));
	}

	getTrendingPictures(): Observable<Picture[]> {
		return this.giphyApiService
			.getTrendingPictures()
			.pipe(map(apiPics => apiPics.map(Picture.toPicture)));
	}
}
