import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { VERSION } from '@angular/core';
import { environment } from '@src/environments/environment.development';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const params = (req.params ?? new HttpParams()).append(
		'api_key',
		environment.apiKey
	);

	const updatedReq = req.clone({
		url: `${environment.apiUrl}/${VERSION}/${req.url}`,
		params,
	});

	return next(updatedReq);
};
