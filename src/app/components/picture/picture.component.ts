import { Component, Input } from '@angular/core';
import { Picture } from '@src/app/shared/model/picture';

@Component({
	selector: 'pic-picture',
	standalone: true,
	imports: [],
	templateUrl: './picture.component.html',
	styleUrl: './picture.component.scss',
})
export class PictureComponent {
	@Input({ required: true }) picture!: Picture;
}
