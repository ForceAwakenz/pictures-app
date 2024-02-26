import { HttpInterceptorFn } from '@angular/common/http';

export const errorHandleInterceptor: HttpInterceptorFn = (req, next) => {
	//TODO: Implement error handling
	return next(req);
};
