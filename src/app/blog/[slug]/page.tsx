import { notFound } from "next/navigation";
import NotionContent from "../../../components/NotionContent";
import { getPostBySlug, getPageContent } from "../../lib/notion";
import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionBlock = BlockObjectResponse | PartialBlockObjectResponse;

export default async function BlogPost({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;

  const page = await getPostBySlug(slug);

  if (!page) {
    notFound();
  }

  const blocks: NotionBlock[] = await getPageContent(page.id);

  const title =
    "properties" in page &&
    page.properties?.Title &&
    "title" in page.properties.Title &&
    Array.isArray((page.properties.Title).title) &&
    (page.properties.Title).title[0]?.plain_text
      ? (page.properties.Title).title[0].plain_text
      : "Artigo";

      const tags =
  "properties" in page &&
  page.properties?.Tags &&
  "multi_select" in page.properties.Tags &&
  Array.isArray(page.properties.Tags.multi_select)
    ? page.properties.Tags.multi_select.map((tag) => tag.name)
    : [];

    const date =
  "properties" in page &&
  page.properties?.Date &&
  "date" in page.properties.Date &&
  page.properties.Date.date?.start
    ? new Date(page.properties.Date.date.start)
    : null;

    const formattedDate = date
  ? date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  : null;

  return (
    <>
    <main className="bg-[#0A0F0F] text-[#E0F2F1] min-h-screen py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-jetbrains   text-[#26A69A] mb-8 text-center">{title}</h1>
        <NotionContent blocks={blocks} />

         <div className="mt-12 space-y-4 text-center">
      {formattedDate && (
        <p className="text-sm text-[#80CBC4] font-medium">
          Publicado em {formattedDate}
        </p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#263238] text-[#80CBC4] px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>

      </div>
    </main>
    </>
  );
}
