import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, catchError, retry } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorHandleInterceptor: HttpInterceptorFn = (req, next) => {
	const notificationService = inject(NotificationService);

	return next(req).pipe(
		retry(2),
		catchError(error => {
			console.error(error);

			const errorMessage =
				error?.error?.meta?.msg ?? error.message ?? 'An error occurred';

			notificationService.notify(errorMessage);
			return EMPTY;
		})
	);
};
