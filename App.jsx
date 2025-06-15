// Site profissional para o estúdio de tatuagem TANK
// Stack: React + TailwindCSS + Firebase (autenticação e banco de dados)
// Estrutura: Home, Galeria, Orçamentos, Agendamento, Sobre, Contato

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("Mensagem enviada!");

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="p-6 bg-black shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">TANK Tattoo</h1>
        <nav className="space-x-6 text-sm">
          <a href="#galeria">Galeria</a>
          <a href="#orcamento">Orçamento</a>
          <a href="#agendamento">Agendamento</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="p-10 text-center bg-gradient-to-b from-black to-neutral-900">
        <h2 className="text-4xl mb-4 font-bold">Estilo. Arte. Identidade.</h2>
        <p className="max-w-2xl mx-auto text-lg text-neutral-300">
          O estúdio TANK é um espaço de expressão artística, com foco em tatuagens autorais, temática naturalista e atendimento de excelência.
        </p>
      </section>

      <section id="galeria" className="p-10 bg-neutral-900">
        <h3 className="text-2xl font-semibold mb-6">Galeria de Tatuagens</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg h-64">
              <img src={`https://source.unsplash.com/400x400/?tattoo,${i}`} alt="Tattoo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="orcamento" className="p-10 bg-black">
        <h3 className="text-2xl font-semibold mb-4">Peça seu Orçamento</h3>
        <form className="grid gap-4 max-w-xl">
          <Input placeholder="Seu nome" name="nome" onChange={handleChange} />
          <Input placeholder="Seu e-mail" name="email" onChange={handleChange} />
          <Textarea placeholder="Descreva a tatuagem que deseja" name="mensagem" onChange={handleChange} />
          <Button onClick={handleSubmit}>Enviar</Button>
        </form>
      </section>

      <section id="agendamento" className="p-10 bg-neutral-900">
        <h3 className="text-2xl font-semibold mb-4">Agende um Horário</h3>
        <p className="mb-4">Agendamentos via WhatsApp ou formulário acima.</p>
        <a href="https://wa.me/55SEUNUMERO" target="_blank">
          <Button variant="outline">Agendar pelo WhatsApp</Button>
        </a>
      </section>

      <section id="sobre" className="p-10 bg-black">
        <h3 className="text-2xl font-semibold mb-4">Sobre o Estúdio</h3>
        <p className="text-neutral-300 max-w-2xl">
          Fundado por um artista apaixonado por natureza, o estúdio TANK une conforto, estética e segurança. Ambiente acolhedor, materiais descartáveis, técnicas modernas.
        </p>
      </section>

      <section id="contato" className="p-10 bg-neutral-900">
        <h3 className="text-2xl font-semibold mb-4">Contato</h3>
        <p>Email: contato@tanktattoo.com.br</p>
        <p>Instagram: <a href="https://instagram.com/tanktattoo" target="_blank" className="text-blue-400">@tanktattoo</a></p>
      </section>

      <footer className="p-4 text-center text-sm bg-black text-neutral-400">
        © 2025 TANK Tattoo. Todos os direitos reservados.
      </footer>
    </main>
  );
}
