import { HTTPResponseType } from './../model/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiPictureType } from '../model/picture';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PATHS } from '../constants/paths.constant';

@Injectable({
	providedIn: 'root',
})
export class GiphyApiService {
	private http = inject(HttpClient);

	getSeachedPictures(
		searchPhraze: string,
		limit = 15
	): Observable<ApiPictureType[]> {
		const params = new HttpParams().set('q', searchPhraze).set('limit', limit);

		return this.http
			.get<HTTPResponseType<ApiPictureType[]>>(`${PATHS.SEARCH}`, { params })
			.pipe(map(resp => resp.data));
	}

	getTrendingPictures(limit = 15): Observable<ApiPictureType[]> {
		const params = new HttpParams().set('limit', limit);

		return this.http
			.get<HTTPResponseType<ApiPictureType[]>>(`${PATHS.TRENDING}`, { params })
			.pipe(map(resp => resp.data));
	}
}
