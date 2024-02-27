import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MatSnackBarAction,
	MatSnackBarActions,
	MatSnackBarLabel,
	MatSnackBarRef,
	MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { SnackBarDataType } from '@src/app/shared/model/snack-bar';

@Component({
	selector: 'pic-snack-bar',
	standalone: true,
	imports: [
		MatButtonModule,
		MatSnackBarLabel,
		MatSnackBarActions,
		MatSnackBarAction,
	],
	templateUrl: './snack-bar.component.html',
	styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
	snackBarRef = inject(MatSnackBarRef);
	data: SnackBarDataType = inject(MAT_SNACK_BAR_DATA);
}
