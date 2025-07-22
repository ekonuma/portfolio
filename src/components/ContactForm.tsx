"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function ContatoForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const query = new URLSearchParams(formData).toString();
    console.log(formData)
    await fetch(`${process.env.NEXT_PUBLIC_WEB_APP_URL}?${query}`, {
      method: "GET",
      mode: "no-cors",
    });

    setLoading(false);
    alert("Mensagem enviada com sucesso!");

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm text-[#B2DFDB]">
            Nome *
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
          />
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-[#B2DFDB]">
            Email *
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
          />
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="telefone" className="text-sm text-[#B2DFDB]">
            Telefone
          </label>
          <input
            onChange={handleChange}
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
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
          value={formData.assunto}
          onChange={handleChange}
          className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="mensagem" className="text-sm text-[#B2DFDB]">
          Mensagem *
        </label>
        <textarea
          onChange={handleChange}
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          value={formData.mensagem}
          className="bg-[#1E1E1E] text-[#E0F2F1] px-4 py-2 rounded border border-[#263230] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
        ></textarea>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">

        {loading ? <LoadingSpinner /> :
          <button
            type="submit"
            className="mt-4 bg-[#00796B] text-white font-semibold px-6 py-3 rounded hover:bg-[#009688] transition"
          >
            Enviar Mensagem
          </button>}
        <a
          href="https://wa.me/5515997929891?text=Olá%20Eike,%20quero%20transformar%20a%20minha%20ideia%20em%20um%20projeto%20incrível!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-[#25D366] text-[#0A0F0F] font-semibold rounded hover:bg-[#4FE68C] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M16.001 3.2c-7.083 0-12.8 5.717-12.8 12.8 0 2.26.59 4.49 1.708 6.444L3.2 28.8l6.656-2.122c1.945 1.018 4.175 1.608 6.444 1.608 7.083 0 12.8-5.717 12.8-12.8s-5.717-12.8-12.8-12.8zm0 23.2c-2.052 0-4.071-.547-5.856-1.588l-.419-.244-3.95 1.26 1.278-3.879-.257-.398c-1.095-1.694-1.674-3.654-1.674-5.691 0-5.86 4.772-10.632 10.632-10.632 5.857 0 10.633 4.773 10.633 10.632 0 5.86-4.776 10.63-10.633 10.63zm6.35-7.665c-.352-.176-2.085-1.031-2.407-1.151-.322-.121-.557-.176-.793.177-.235.352-.918 1.15-1.127 1.385-.208.234-.419.264-.771.088-.352-.176-1.493-.55-2.849-1.739-1.052-.938-1.76-2.096-1.965-2.448-.204-.353-.022-.542.154-.718.158-.158.352-.411.528-.617.176-.206.234-.352.352-.587.117-.234.058-.44-.028-.617-.088-.176-.772-1.848-1.058-2.541-.275-.635-.558-.547-.792-.558h-.676c-.235 0-.616.088-.938.411s-1.233 1.208-1.233 2.932 1.26 3.392 1.434 3.627c.176.234 2.492 3.806 6.036 5.319.843.363 1.5.581 2.016.743.854.264 1.638.234 2.268.14.692-.103 2.036-.812 2.323-1.606.282-.792.282-1.454.198-1.6-.088-.146-.34-.234-.693-.411z" />
          </svg>
          WhatsApp
        </a>
      </div>

    </form>
  );
}