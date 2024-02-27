import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './components/pictures/pictures.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
	selector: 'pic-root',
	standalone: true,
	imports: [CommonModule, PicturesComponent, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'pictures-app';
}
