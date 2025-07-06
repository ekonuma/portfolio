import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eike Konuma | Analista desenvolvedor Backend</title>
        <meta
          name="description"
          content="Portfólio de Desenvolvedor Backend especializado em APIs escaláveis"
        />
      </Head>

      <main className="bg-[#0A0F0F] text-[#E0F2F1] min-h-screen">
        <section
          className="flex flex-col justify-center items-center text-center h-screen"
          id="hero"
        >
          <h2 className="text-4xl font-bold mb-4 mt-24">
            Olá, sou <span className="text-[#26A69A]">Eike</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-[#B2DFDB] leading-relaxed text-center">
            Sou um Analista desenvolvedor backend Java. Desde minha infância tenho um grande interesse por tecnologia e gadgets, e esse entusiasmo em explorar as ferramentas e inovações continua a impulsionar meu trabalho. Estou animado para aproveitar minha bagagem de conhecimento diverso para criar soluções inovadoras e contribuir com novos projetos.
        </p>
        </section>

        <section className="container mx-auto py-16 px-4" id="projetos">
          <h3 className="text-3xl font-bold mb-8 text-[#26A69A]">Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Upgrade from Java 8 Spring 2 to Java 17 Spring 3</h4>
              <p className="text-[#B2DFDB] mb-4">
               Atualização da implementação do Spring 2 para Spring 3 juntamente com a atualização do Java 8 para Java 17.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">OGZ</h4>
              <p className="text-[#B2DFDB] mb-4">
               OGZ é um programa desktop especialmente criado para facilitar a organização do estoque de materiais utilizados pelo grupo Omega de robótica da Facens (Faculdade de Engenharia de Sorocaba).
              </p>
              <div className="flex gap-4 text-sm">
                <Link href="https://github.com/Omeganizer" className="text-[#26A69A] underline">
                  GitHub
                </Link>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Smartcash</h4>
              <p className="text-[#B2DFDB] mb-4">
               Smartcash é um aplicativo de controle financeiro e e controle de vendas para Android.
              </p>
              <div className="flex gap-4 text-sm">
                <Link href="https://github.com/JEAM-Team" className="text-[#26A69A] underline">
                  GitHub
                </Link>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">ORP</h4>
              <p className="text-[#B2DFDB] mb-4">
               ORP ou Organizador Rápido de Pedidos é um aplicativo Android que permite a rápida comunicação entre o pedido em um restaurante e seu processamento na cozinha.
              </p>
              <div className="flex gap-4 text-sm">
                <Link href="https://github.com/ekonuma/ORP-Organizador-Rapido-de-Pedidos" className="text-[#26A69A] underline">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-18">
          {[
            'Java', 'Spring', 'Golang', 'Javascript', 'Typescript', 'React', 'NextJS',
            'Azure', 'AWS', 'AzureDevOps', 'Github', 'Gitlab', 'Docker', 'Kubernetes',
            'Linux', 'Shell', 'Android', 'Kotlin',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#263230] text-[#E0F2F1] px-6 py-2 rounded-md text-sm font-medium w-full text-center whitespace-nowrap flex items-center justify-center min-h-[44px]"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <section className="container mx-auto py-20 px-4" id="contato">
          <h3 className="text-3xl font-bold mb-12 text-[#26A69A]">Contato</h3>

          <div className="mb-12 space-y-3 text-lg text-[#B2DFDB]">
            <p>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:ekonuma12@gmail.com"
                className="text-[#26A69A] hover:underline"
              >
                ekonuma12@gmail.com
              </Link>
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              <Link
                href="tel:+5515997929891"
                className="text-[#26A69A] hover:underline"
              >
                (15) 99792-9891
              </Link>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <Link
                href="https://www.linkedin.com/in/ekonuma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#26A69A] hover:underline"
              >
                ekonuma
              </Link>
            </p>
          </div>
          <form className="space-y-6">
            <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="nome" className="text-sm text-[#B2DFDB]">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-[#B2DFDB]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="telefone" className="text-sm text-[#B2DFDB]">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="assunto" className="text-sm text-[#B2DFDB]">
                Assunto *
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                required
                className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="mensagem" className="text-sm text-[#B2DFDB]">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#26A69A] text-[#0A0F0F] font-semibold px-6 py-3 rounded hover:bg-[#1DE9B6] transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
        <footer className="bg-[#1E1E1E] text-[#80CBC4] text-center py-4">
          &copy; {new Date().getFullYear()} ekonuma. Todos os direitos
          reservados.
        </footer>
      </main>
    </>
  );
}
