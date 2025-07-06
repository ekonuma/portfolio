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

  return (
    <main className="bg-[#0A0F0F] text-[#E0F2F1] min-h-screen py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#26A69A] mb-8">{title}</h1>
        <NotionContent blocks={blocks} />
      </div>
    </main>
  );
}
