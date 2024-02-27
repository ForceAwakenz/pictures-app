export type PictureType = {
	id: string;
	embedURL: string;
	title: string;
	date: Date;
	extraProperties: Record<string, unknown>;
};

export type ApiPictureType = {
	id: string;
	embed_url: string;
	title: string;
	create_datetime: string;
};

export class Picture implements PictureType {
	id: string;
	embedURL: string;
	title: string;
	date: Date;
	extraProperties: Record<string, unknown>;

	constructor({
		id,
		embed_url,
		title,
		create_datetime,
		...rest
	}: ApiPictureType) {
		this.id = id;
		this.embedURL = embed_url;
		this.title = title;
		this.date = new Date(create_datetime);
		this.extraProperties = rest;
	}

	static toPicture(picture: ApiPictureType): Picture {
		return new Picture(picture);
	}
}
