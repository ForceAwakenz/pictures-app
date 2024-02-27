import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PictureComponent } from '@app/components/picture/picture.component';
import { Picture } from '@src/app/shared/model/picture';

@Component({
	selector: 'pic-pictures',
	standalone: true,
	imports: [PictureComponent],
	templateUrl: './pictures.component.html',
	styleUrl: './pictures.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PicturesComponent {
	@Input() pictures!: Picture[];
}
