import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href, locales } from '../../config/site';

export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale }, props: { locale } }));
}
export const GET: APIRoute = async ({ props }) => {
  const { locale } = props;
  const docs = await getCollection(
    'docs',
    ({ data }) => data.locale === locale,
  );
  const index = docs.map(({ data, body }) => ({
    title: data.title,
    description: data.description,
    text: (body || '').replace(/[#*>`\x5B\x5D]/g, ''),
    url: href(
      data.locale,
      data.docSlug === 'getting-started' ? 'docs' : `docs/${data.docSlug}`,
    ),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
