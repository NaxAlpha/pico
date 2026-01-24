import { drizzle } from 'drizzle-orm/d1';
import * as schema from '../schema';

export function getDB(env: App.Locals['runtime']['env']) {
  return drizzle(env.DB, { schema });
}
