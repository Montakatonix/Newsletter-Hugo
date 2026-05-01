"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "pt" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  "nav.arquivo": { pt: "Arquivo", en: "Archive" },
  "nav.sobre": { pt: "Sobre", en: "About" },
  "nav.comenzar": { pt: "Cameçar", en: "Start" },
  "nav.receber": { pt: "Receber", en: "Subscribe" },
  "hero.label": { pt: "Cara semanal · Filosofia estratégica", en: "Weekly letter · Strategic philosophy" },
  "hero.cta": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "hero.sub": { pt: "Sem spam. Sem algoritmos. Só uma carta, uma vez por semana.", en: "No spam. No algorithms. Just one letter, once a week." },
  "hero.quote": { pt: "“Entra, pousa, respira, lê melhor.”", en: "“Come in, pause, breathe, read better.”" },
  "hero.placeholder": { pt: "o seu email", en: "your email" },
  "hero.visual1": { pt: "Filosofia aplicada", en: "Applied philosophy" },
  "hero.visual2": { pt: "à vida real.", en: "to real life." },
  "hero.visual3": { pt: "Não ao sucesso.", en: "Not success." },
  "hero.visual4": { pt: "À clareza.", en: "Clarity." },
  "manifesto.label": { pt: "O que é o Almanaque", en: "What is the Almanaque" },
  "manifesto.heading": { pt: "Não é coaching. Não é produtividade com outro nome. Não é motivação embalada em citações.", en: "Not coaching. Not productivity with a different name. Not motivation wrapped in quotes." },
  "manifesto.body": { pt: "É uma carta semanal de filosofia estratégica aplicada à vida real. Para quem prefere pensar a reagir.", en: "It's a weekly letter of strategic philosophy applied to real life. For those who prefer thinking to reacting." },
  "manifesto.link": { pt: "Saber mais sobre o projecto", en: "Leatn more about the project" },
  "section.ultimaCarta": { pt: "Última carta", en: "Latest letter" },
  "section.arquivo": { pt: "Arquivo", en: "Archive" },
  "section.verTodas": { pt: "Ver todas →", en: "See all →" },
  "section.lerCarta": { pt: "Ler carta", en: "Read letter" },
  "cta.heading": { pt: "Uma carta por semana.\nNada mais, nada menos.", en: "One letter per week.\nNothing more, nothing less." },
  "cta.body": { pt: "Para pensar melhor, decidir melhor o e perder menos para o ruído do tempo.", en: "To think better, decide better, and lose less to the noise of time." },
  "cta.btn": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "arquivo.label": { pt: "Almanaque Contemporâneo", en: "Almanaque Contemporâneo" },
  "arquivo.title1": { pt: "Arquivo", en: "Archive" },
  "arquivo.title2": { pt: "vivo", en: "alive" },
  "arquivo.desc": { pt: "Todas as cartas, por ordem cronológica inversa. Cada uma é autönoma — pode começar por qualquer uma.", en: "All letters, in reverse chronological order. Each is autonomous — you can start with any one." },
  "arquivo.footer": { pt: "cartas · e o arquivo continua a crescer", en: "letters · and the archive keeps growing" },
  "slug.ctaBtn": { pt: "Subscrever", en: "Subscribe" },
  "sub.label": { pt: "Almanaque Contemporâneo", en: "Almanaque Contemporâneo" },
  "sub.title1": { pt: "Receber", en: "Receive" },
  "sub.title2": { pt: "o Almanaque", en: "the Almanaque" },
  "sub.desc": { pt: "Carta semanal de filosofia estratégica aplicada à vida real.", en: "Weekly letter of strategic philosophy applied to real life." },
  "sub.cta": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "sub.feat1": { pt: "Uma carta por semana, Às quartas-feiras", en: "One letter per week, on Wednesdays" },
  "sub.feat2": { pt: "Filosofia estratégica aplicada à vida real", en: "Strategic philosophy applied to real life" },
  "sub.feat3": { pt: "Sem publicidade. Sem algoritmos.", en: "No ads. No algorithms." },
  "sub.feat4": { pt: "Pode cancelar quando quiser", en: "Cancel anytime" },
  "sub.pull": { pt: "Uma carta para quem prefere pensar a reagir.", en: "A letter for those who prefer thinking to reacting." },
  "gracias.label": { pt: "Subscrição registada", en: "Subscription confirmed" },
  "gracias.title1": { pt: "Agora", en: "Now" },
  "gracias.title2": { pt: "pousa.", en: "pause." },
  "gracias.body1": { pt: "A sua presença aqui foi registada. A primeira carta chegará em breve.", en: "Your presence here has been registered. The first letter will arrive soon." },
  "gracias.body2": { pt: "Enquanto aguarda: verifique a sua caixa de entrada.", en: "While you wait: check your inbox." },
  "gracias.note": { pt: "O Almanaque não existe para lhe dar mais coisas a fazer.", en: "The Almanaque doesn't exist to give you more things to do." },
  "gracias.link1": { pt: "Explorar o arquivo", en: "Explore the archive" },
  "gracias.link2": { pt: "Por onde começar →", en: "Where to start →" },
  "sobre.label": { pt: "Sobre o projecto", en: "About the project" },
  "sobre.title1": { pt: "Almanaque", en: "Almanaque" },
  "sobre.title2": { pt: "Contemporâneo", en: "Contemporâneo" },
  "sobre.p1": { pt: "O Almanaque Contemporâneo é uma carta semanal de filosofia estratégica aplicada à vida real.", en: "Almanaque Contemporâneo is a weekly letter of strategic philosophy applied to real life." },
  "sobre.p2": { pt: "Cada edição parte de uma observação concreta.", en: "Each edition starts from a concrete observation." },
  "sobre.h2a": { pt: "O que não é", en: "What it's not" },
  "sobre.pa": { pt: "Não é coaching. Não é produtividade. É uma carta.", en: "Not coaching. Not productivity. It's a letter." },
  "sobre.h2b": { pt: "Para quem existe", en: "Who it's for" },
  "sobre.pb": { pt: "Para quem prefere pensar a reagir.", en: "For those who prefer thinking to reacting." },
  "sobre.h2c": { pt: "Por que existe", en: "Why it exists" },
  "sobre.pc": { pt: "Porque a maioria dos conteúdos sobre pensamento å sobre velocidade.", en: "Because most content about thinking is about speed." },
  "sobre.h2d": { pt: "O que pode esperar", en: "What to expect" },
  "sobre.pd": { pt: "Uma carta por semana, Às quartas-feiras. Nada mais. Nada menos.", en: "One letter per week, on Wednesdays. Nothing more. Nothing less." },
  "sobre.cta": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "sobre.stat1l": { pt: "Frequência", en: "Frequency" },
  "sobre.stat1v": { pt: "Uma carta por semana", en: "One letter per week" },
  "sobre.stat1d": { pt: "Às quartas-feiras", en: "On Wednesdays" },
  "sobre.stat2l": { pt: "Duração", en: "Duration" },
  "sobre.stat2v": { pt: "5 a 10 minutos", en: "5 to 10 minutes" },
  "sobre.stat2d": { pt: "Por edição", en: "Per edition" },
  "sobre.stat3l": { pt: "Formato", en: "Format" },
  "sobre.stat3v": { pt: "Carta editorial", en: "Editorial letter" },
  "sobre.stat3d": { pt: "Texto longo, sem imagens", en: "Long text, no images" },
  "sobre.stat4l": { pt: "Custo", en: "Cost" },
  "sobre.stat4v": { pt: "Gratuito", en: "Free" },
  "sobre.stat4d": { pt: "Sem publicidade", en: "No advertising" },
  "sobre.stat5l": { pt: "Cancelamento", en: "Cancellation" },
  "sobre.stat5v": { pt: "Quando quiser", en: "Anytime" },
  "sobre.stat5d": { pt: "Sem fricção", en: "No friction" },
  "sobre.pull": { pt: "Entra, pousa, respira, lê melhor.", en: "Come in, pause, breathe, read better." },
  "comenzar.label": { pt: "Novo aqui?", en: "New here?" },
  "comenzar.title1": { pt: "Cameçar", en: "Start" },
  "comenzar.title2": { pt: "por aqui", en: "here" },
  "comenzar.desc": { pt: "Se Acabou de chegar ao Almanaque, estas são as cartas que melhor representam o espírito do projecto.", en: "If you've just arrived at the Almanaque, these are the letters that best represent the spirit of the project." },
  "comenzar.how": { pt: "Como funciona", en: "How it works" },
  "comenzar.step1t": { pt: "Uma carta por semana", en: "One letter per week" },
  "comenzar.step1b": { pt: "Às quartas-feiras, uma nova carta chega à sua caixa de entrada.", en: "On Wednesdays, a new letter arrives in your inbox." },
  "comenzar.step2t": { pt: "Um tema, uma perspectiva", en: "One theme, one perspective" },
  "comenzar.step2b": { pt: "Cadu carta parte de um padrão humano concreto.", en: "Each letter starts from a concrete human pattern." },
  "comenzar.step3t": { pt: "O arquivo fica aqui", en: "The archive stays here" },
  "comenzar.step3b": { pt: "Todas as cartas anteriores estão disponíveis no arquivo.", en: "All previous letters are available in the archive." },
  "comenzar.essential": { pt: "Cartas essenciais", en: "Essential letters" },
  "comenzar.verArquivo": { pt: "Ver arquivo completo →", en: "See full archive →" },
  "comenzar.ready": { pt: "Pronto para receber a próxima carta?", en: "Ready to receive the next letter?" },
  "comenzar.cta": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "form.placeholder": { pt: "o seu email", en: "your email" },
  "form.cta": { pt: "Receber o Almanaque", en: "Get the Almanaque" },
  "form.loading": { pt: "…", en: "…" },
  "form.noSpam": { pt: "Sem spam. Sem algoritmos. Só uma carta, uma vez por semana.", en: "No spam. No algorithms. Just one letter, once a week." },
  "min": { pt: "min", en: "min" },
  "minutos": { pt: "minutos de leitura", en: "minutes read" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("almanaque-lang") as Lang | null;
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("almanaque-lang", l);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry.pt ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
