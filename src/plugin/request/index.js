import Config from '@/config';
import ajax from './ajax';
import {
	init,
	app,
} from './app';
export default Config.appRequest ? app : ajax;
