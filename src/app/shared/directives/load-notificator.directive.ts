import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Output,
	inject,
} from '@angular/core';

@Directive({
	selector: '[picLoadNotificator]',
	standalone: true,
})
export class LoadNotificatorDirective {
	@Output() picLoaded = new EventEmitter<boolean>();
	target = inject(ElementRef<HTMLImageElement>);

	@HostListener('load') onLoad(): void {
		this.picLoaded.emit(true);
	}
}
