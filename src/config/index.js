import dev from './dev-env';
import prod from './prod-env';
const env = 'dev';
export default (env === 'dev' ? dev : prod);
