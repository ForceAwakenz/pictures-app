import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorHandleInterceptor: HttpInterceptorFn = (req, next) => {
	const notificationService = inject(NotificationService);

	return next(req).pipe(
		catchError(error => {
			console.error(error);

			const errorMessage =
				error?.error?.meta?.msg ?? error.message ?? 'An error occurred';

			notificationService.notify(errorMessage);
			return EMPTY;
		})
	);
};
