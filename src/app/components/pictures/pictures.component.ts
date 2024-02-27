import { Component } from '@angular/core';
import { PictureComponent } from '@app/components/picture/picture.component';
import { Picture } from '@src/app/shared/model/picture';

@Component({
	selector: 'pic-pictures',
	standalone: true,
	imports: [PictureComponent],
	templateUrl: './pictures.component.html',
	styleUrl: './pictures.component.scss',
})
export class PicturesComponent {
	pictures: Picture[] = [
		new Picture({
			id: '1',
			embed_url: 'https://www.youtube.com/embed/1',
			title: 'Title 1',
			create_datetime: '2021-01-01T00:00:00Z',
		}),
		new Picture({
			id: '2',
			embed_url: 'https://www.youtube.com/embed/2',
			title: 'Title 2',
			create_datetime: '2021-01-02T00:00:00Z',
		}),
	];
}
