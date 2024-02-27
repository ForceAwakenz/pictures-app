export type HTTPResponseType<T> = {
	data: T;
	meta: {
		status: number;
		msg: string;
	};
};
