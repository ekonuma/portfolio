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
            
            {loading ? <LoadingSpinner /> : 
            <button
              type="submit"
              className="bg-[#26A69A] text-[#0A0F0F] font-semibold px-6 py-3 rounded hover:bg-[#1DE9B6] transition"
            >
              Enviar Mensagem
            </button>}

          </form>
  );
}