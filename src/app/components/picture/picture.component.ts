import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Picture } from '@src/app/shared/model/picture';
import { NgOptimizedImage } from '@angular/common';
import { LoadNotificatorDirective } from '@src/app/shared/directives/load-notificator.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
	selector: 'pic-picture',
	standalone: true,
	imports: [
		NgOptimizedImage,
		LoadNotificatorDirective,
		MatProgressSpinnerModule,
	],
	templateUrl: './picture.component.html',
	styleUrl: './picture.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent {
	@Input() picture!: Picture;
	loadComplete = false;

	onLoad(): void {
		this.loadComplete = true;
	}
}
