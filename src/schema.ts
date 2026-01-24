import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Users (optional auth)
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  createdAt: integer('created', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => new Date()),
});

// Apps (created by users or anonymous)
export const apps = sqliteTable('apps', {
  id: text('id').primaryKey(), // slug/UUID
  userId: integer('user_id').references(() => users.id),
  title: text('title').notNull(),
  html: text('html').notNull(),
  css: text('css'),
  js: text('js'),
  createdAt: integer('created', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => new Date()),
});
