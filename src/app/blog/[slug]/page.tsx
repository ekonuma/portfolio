import { notFound } from "next/navigation";
import NotionContent from "../../../components/NotionContent";
import { getPostBySlug, getPageContent } from "../../lib/notion";

type BlogPostParams = {
  params: { slug: string };
};

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = params;

  const page = await getPostBySlug(slug);

  if (!page) {
    notFound();
  }

  const blocks = await getPageContent(page.id);

  const title =
    page.properties?.Title?.title?.[0]?.plain_text ??
    "Artigo";

  return (
    <main className="bg-[#0A0F0F] text-[#E0F2F1] min-h-screen py-32 px-4">
      <title>{title} | Blog</title>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#26A69A] mb-8">{title}</h1>
        <NotionContent blocks={blocks} />
      </div>
    </main>
  );
}
