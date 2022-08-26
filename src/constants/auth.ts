const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_MAX_AGE = (60 * 60 * 24 * 7 * 256) as number; //1 year
const COOKIE_NAME = process.env.COOKIE_NAME as string;
const REDIS_URL = process.env.REDIS_URL as string;

export default { JWT_MAX_AGE, COOKIE_NAME, JWT_SECRET, REDIS_URL };
