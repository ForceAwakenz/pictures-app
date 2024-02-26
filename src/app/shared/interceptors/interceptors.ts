import { apiInterceptor } from '@shared/interceptors/api.interceptor';
import { errorHandleInterceptor } from './error-handle.interceptor';

export const INTERCEPTORS = [apiInterceptor, errorHandleInterceptor];
