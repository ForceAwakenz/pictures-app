import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarComponent } from '@src/app/components/snack-bar/snack-bar.component';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	private snackBar = inject(MatSnackBar);
	config: MatSnackBarConfig = {
		duration: 4000,
		horizontalPosition: 'right',
		verticalPosition: 'top',
	};

	notify(message: string, buttonColor = 'warn'): void {
		this.snackBar.openFromComponent(SnackBarComponent, {
			...this.config,
			data: { message, buttonColor },
		});
	}
}
