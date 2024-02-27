import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { environment } from '@src/environments/environment.development';
import { VERSION } from '../constants/paths.constant';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const params = (req.params ?? new HttpParams())
		.append('api_key', environment.apiKey)
		.append('rating', 'g');

	const updatedReq = req.clone({
		url: `${environment.apiUrl}/${VERSION}/${req.url}`,
		params,
	});

	return next(updatedReq);
};
