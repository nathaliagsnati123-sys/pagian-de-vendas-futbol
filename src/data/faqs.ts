export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es el Reto 30 Días?",
    answer:
      "Es un plan de entrenamiento de fútbol de 30 días con una sesión preparada para cada día.",
  },
  {
    id: "faq-2",
    question: "¿El acceso termina después de 30 días?",
    answer:
      "No. Los 30 días son el programa. El acceso es de por vida.",
  },
  {
    id: "faq-3",
    question: "¿Cuánto dura cada entrenamiento?",
    answer:
      "Aproximadamente 20 minutos.",
  },
  {
    id: "faq-4",
    question: "¿Puedo entrenar solo?",
    answer:
      "Sí, el Reto está diseñado para que puedas seguir las sesiones por tu cuenta.",
  },
  {
    id: "faq-5",
    question: "¿Puedo acceder desde mi celular?",
    answer:
      "Sí. También desde tablet y computadora.",
  },
  {
    id: "faq-6",
    question: "¿Necesito entrenar todos los días?",
    answer:
      "El programa está organizado en 30 días. Si necesitas adaptar tu rutina, puedes hacerlo según tu disponibilidad.",
  },
  {
    id: "faq-7",
    question: "¿Qué pasa después de terminar el Reto?",
    answer:
      "Puedes continuar utilizando los +1.000 ejercicios, entrenamientos por objetivo y bonos incluidos.",
  },
  {
    id: "faq-8",
    question: "¿Necesito descargar una aplicación?",
    answer:
      "No. La plataforma funciona directamente en el navegador de tu dispositivo con acceso instantáneo sin tener que instalar aplicaciones pesadas ni ocupar memoria.",
  },
];
