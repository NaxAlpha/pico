import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';
import { apps } from '../../schema';

export const POST: APIRoute = async ({ request, locals }) => {
	const formData = await request.formData();
	const title = formData.get('title') as string;
	const html = formData.get('html') as string;
	const css = formData.get('css') as string | null;
	const js = formData.get('js') as string | null;

	if (!title || !html) {
		return new Response('Title and HTML are required', { status: 400 });
	}

	// Generate a unique ID
	const id = Math.random().toString(36).substring(2, 10);

	const db = getDB(locals.runtime.env);
	await db.insert(apps).values({
		id,
		title,
		html,
		css: css || undefined,
		js: js || undefined,
	});

	// Redirect to the new app
	return new Response(null, {
		status: 302,
		headers: {
			Location: `/app/${id}`,
		},
	});
};
