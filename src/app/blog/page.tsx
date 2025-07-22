import Link from "next/link";
import { getAllPosts } from "../lib/notion";

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <main className="bg-[#0A0F0F] text-[#E0F2F1] min-h-screen pt-32 px-4">
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-[#26A69A]">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            if (
              "properties" in post &&
              post.properties &&
              post.properties.Slug &&
              post.properties.Slug.type === "rich_text" &&
              Array.isArray(post.properties.Slug.rich_text) &&
              post.properties.Slug.rich_text.length > 0 &&
              post.properties.Title &&
              post.properties.Title.type === "title" &&
              post.properties.Title.title &&
              Array.isArray(post.properties.Title.title) &&
              post.properties.Title.title[0] &&
              post.properties.Date &&
              post.properties.Date.type === "date" &&
              post.properties.Date.date &&
              post.properties.Tags &&
              post.properties.Tags.type === "multi_select" &&
              post.properties.Tags.multi_select
            ) {
              const id = post.id;
              console.log('Post ID:', id);
              const slug = post.properties.Slug.rich_text[0].plain_text;
              const title = post.properties.Title.title[0].plain_text;
              const date = post.properties.Date.date.start;
              return (
                <div
                  key={slug}
                  className="bg-[#1E1E1E] p-6 rounded-xl shadow-md hover:scale-[1.02] transition"
                >
                  <h2 className="text-xl font-semibold text-[#26A69A] mb-2">{title}</h2>
                  <p className="text-sm text-[#B2DFDB]">{new Date(date).toLocaleDateString('pt-BR')}</p>

                  <Link href={`/blog/${slug}`} className="block">

                    <div className="flex flex-wrap gap-2 mt-2">
                      {Array.isArray(post.properties.Tags.multi_select) &&
                        post.properties.Tags.multi_select.map((tag) => (
                          <span
                            key={tag.id}
                            className="bg-[#263230] text-[#E0F2F1] text-xs px-3 py-1 rounded-full"
                          >
                            {tag.name}
                          </span>
                        ))}
                    </div>

                    <span className="text-[#1DE9B6] hover:underline text-sm mt-4 inline-block">
                      Ler artigo →
                    </span>

                </Link>
                </div>

        );
            }
        return null;
          })}
      </div>
    </section>
    </main >
  );
}