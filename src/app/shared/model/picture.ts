export type PictureType = {
	id: string;
	imageURL: string;
	imageData: ImageDataType;
	title: string;
	date: Date;
	extraProperties: Record<string, unknown>;
};

export type ImageDataType = {
	height: string;
	width: string;
	url: string;
};

export type ApiPictureType = {
	id: string;
	title: string;
	create_datetime: string;
	images: {
		original: ImageDataType;
		preview_gif: ImageDataType;
	};
};

export class Picture implements PictureType {
	id: string;
	imageURL: string;
	imageData: ImageDataType;
	placeholderURL: string;
	title: string;
	date: Date;
	extraProperties: Record<string, unknown>;

	constructor({ id, title, create_datetime, images, ...rest }: ApiPictureType) {
		this.id = id;
		this.imageURL = images.original.url;
		this.imageData = { ...images.original };
		this.placeholderURL = images.preview_gif.url;
		this.title = title;
		this.date = new Date(create_datetime);
		this.extraProperties = rest;
	}

	static toPicture(picture: ApiPictureType): Picture {
		return new Picture(picture);
	}
}
