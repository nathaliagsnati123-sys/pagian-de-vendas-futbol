import bonus01Img from "../assets/images/bonus_50_entrenamientos_1790777426578.jpg";
import bonus02Img from "../assets/images/bonus_pierna_debil_1790777439697.jpg";
import bonus03Img from "../assets/images/bonus_control_balon_1790777454736.jpg";
import bonus04Img from "../assets/images/bonus_reto_regate_1790777467703.jpg";
import bonus05Img from "../assets/images/bonus_express_1790777485188.jpg";
import bonus06Img from "../assets/images/bonus_fisica_1790777498053.jpg";

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  estimatedValue: string;
  imageUrl: string;
  isSpecial?: boolean;
}

export const BONUSES: BonusItem[] = [
  {
    id: "bono-01",
    number: "BONO #1",
    title: "50 ENTRENAMIENTOS LISTOS",
    subtitle: "Sesiones completas estructuradas",
    description: "Sesiones completas listas para utilizar para complementar o continuar después del Reto 30 Días.",
    tag: "Sesiones Listas",
    estimatedValue: "US$ 24,00",
    imageUrl: bonus01Img,
  },
  {
    id: "bono-02",
    number: "BONO #2",
    title: "RETO PIERNA DÉBIL",
    subtitle: "7 días para tu pierna no dominante",
    description: "7 días de entrenamiento intensivo enfocados en equilibrar y potenciar tu pierna no dominante.",
    tag: "Especialización 7 Días",
    estimatedValue: "US$ 19,00",
    imageUrl: bonus02Img,
  },
  {
    id: "bono-03",
    number: "BONO #3",
    title: "RETO CONTROL DEL BALÓN",
    subtitle: "7 días de dominio del balón",
    description: "7 días dedicados a mejorar tu amortiguación, primer toque orientado y seguridad en el control.",
    tag: "Dominio Total",
    estimatedValue: "US$ 19,00",
    imageUrl: bonus03Img,
  },
  {
    id: "bono-04",
    number: "BONO #4",
    title: "RETO REGATE",
    subtitle: "7 días de desborde y fintas",
    description: "7 días enfocados en regate, desborde en 1 vs 1, cambios de dirección y aceleración con balón.",
    tag: "1 vs 1 y Ritmo",
    estimatedValue: "US$ 19,00",
    imageUrl: bonus04Img,
  },
  {
    id: "bono-05",
    number: "BONO #5",
    title: "ENTRENAMIENTOS EXPRESS",
    subtitle: "10 MIN · 20 MIN · 30 MIN",
    description: "Sesiones de alta intensidad diseñadas para cuando tienes poco tiempo disponible en el día.",
    tag: "Sesiones Rápidas",
    estimatedValue: "US$ 17,00",
    imageUrl: bonus05Img,
  },
  {
    id: "bono-06",
    number: "BONO #6",
    title: "PROGRAMA DE PREPARACIÓN FÍSICA PARA FUTBOLISTAS",
    subtitle: "Fuerza, potencia, resistencia y velocidad",
    description: "Programa complementario para trabajar fuerza funcional, potencia explosiva, resistencia y agilidad para el fútbol.",
    tag: "Rendimiento Físico",
    estimatedValue: "US$ 29,00",
    imageUrl: bonus06Img,
    isSpecial: true,
  },
];
