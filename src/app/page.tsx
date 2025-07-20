"use client";

import ContatoForm from "@/components/ContactForm";
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
          <h2 className="text-4xl font-bold mt-24 mb-6 text-center">
            Olá, sou <span className="text-[#26A69A]">Eike</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-[#B2DFDB] text-center leading-relaxed">
            Como Especialista em Backend Java, crio soluções tecnológicas escaláveis e robustas alinhadas às necessidades dos seus projetos.
          </p>

          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-[#B2DFDB] text-center leading-relaxed">
            Tenho experiência com o ecossistema Java, microsserviços e Azure, desenvolvendo sistemas personalizados otimizando performance, custo e segurança.
          </p>
          <div className="mt-4">

            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-[#B2DFDB] text-center leading-relaxed font-semibold">
              Quer transformar sua ideia em um backend de qualidade?
            </p>

            <button
              onClick={() => {
                const section = document.querySelector('#contato');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}

              className="bg-[#26A69A] text-[#0A0F0F] font-semibold px-6 py-3 rounded hover:bg-[#1DE9B6] transition"
            >
              Mande sua mensagem!
            </button>
          </div>
        </section>

        <section id="servicos" className="mt-24 px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#26A69A]">Serviços</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#B2DFDB] text-base sm:text-lg lg:text-xl">
            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Desenvolvimento Backend</h3>
              <p>
                Criação de APIs e sistemas escaláveis usando Java, Spring Boot e boas práticas de arquitetura.
              </p>
            </div>

            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Arquitetura de Microsserviços</h3>
              <p>
                Projetos distribuídos com foco em resiliência, integração entre serviços e deploy em ambientes cloud.
              </p>
            </div>

            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Integração com Azure</h3>
              <p>
                Soluções em nuvem utilizando recursos da Azure para garantir escalabilidade, segurança e automações.
              </p>
            </div>

            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Consultoria Técnica</h3>
              <p>
                Apoio estratégico em decisões de arquitetura, escolha de tecnologias e otimização de sistemas existentes.
              </p>
            </div>

            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Automação e DevOps</h3>
              <p>
                Pipelines de CI/CD, versionamento e automatização de processos para tornar sua operação mais eficiente.
              </p>
            </div>

            <div className="bg-[#0A0F0F] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-[#26A69A] font-semibold text-xl mb-2">Documentação Técnica</h3>
              <p>
                Produção de documentação clara e útil para seus sistemas, desde guias de uso até especificações técnicas.
              </p>
            </div>
          </div>
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

        <section className="container mx-auto py-16 px-4" id="skills">
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
        </section>
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
          <ContatoForm />
        </section>
        <footer className="bg-[#1E1E1E] text-[#80CBC4] text-center py-4">
          &copy; {new Date().getFullYear()} ekonuma. Todos os direitos
          reservados.
        </footer>
      </main>
    </>
  );
}
