import type { FC, FormEvent } from "react";

export const ContactSection: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-64 bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 size-64 bg-primary/10 blur-[100px]" />
        <div className="text-center mb-12 relative z-10">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Contacto
          </h3>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Vamos construir algo juntos.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Tem um projeto em mente ou quer dizer olá? Estou disponível para
            novas oportunidades e ideias.
          </p>
        </div>
        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
              >
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="O seu nome"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="email@exemplo.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
            >
              Mensagem
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Conte-me sobre o seu projeto..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:scale-[1.01] transition-all shadow-xl shadow-primary/20"
          >
            Enviar mensagem
          </button>
        </form>
        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-60">
          <a
            href="mailto:josyfrancisco99@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              alternate_email
            </span>
            josyfrancisco99@gmail.com
          </a>
          <a
            href="tel:+244934688330"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            +244 934 688 330
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            Luanda, Cazenga
          </a>
        </div>
      </div>
    </section>
  );
};
