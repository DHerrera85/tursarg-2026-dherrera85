export type ActividadEvento = {
  fecha: string;
  hora: string;
  titulo: string;
};

export type FuenteEvento = {
  nombre: string;
  tipo: "Instagram" | "Web oficial" | "Facebook";
  url: string;
  oficial: boolean;
};

export type Evento = {
  id: number;
  titulo: string;
  categoria: "Música" | "Teatro" | "Feria" | "Festival" | "Muestra";

  fechaInicio: string;
  fechaFin?: string;

  hora?: string;
  lugar: string;
  localidad: string;

  descripcion: string;

  destacado: boolean;
  gratuito?: boolean;

  fuente: FuenteEvento;
  estado: "pendiente" | "verificado" | "publicado";

  actividades?: ActividadEvento[];
};

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "El Ponchito 2026",
    categoria: "Festival",

    fechaInicio: "2026-10-06",
    fechaFin: "2026-10-11",

    lugar: "Predio Ferial Catamarca",
    localidad: "Capital",

    descripcion:
      "Propuestas de danza, música y actividades culturales para disfrutar en familia durante El Ponchito 2026.",

    destacado: true,
    gratuito: true,

    fuente: {
      nombre: "Cultura Catamarca Capital",
      tipo: "Instagram",
      url: "https://www.instagram.com/p/DeHqvVlDt_r/?img_index=1",
      oficial: true,
    },

    estado: "verificado",

    actividades: [
      {
        fecha: "2026-10-06",
        hora: "10:00",
        titulo: "Taller de Danzas Árabes – F.R.I.D.A. | Árabe Show Dance",
      },
      {
        fecha: "2026-10-07",
        hora: "15:00",
        titulo:
          "Taller de Folklore – F.R.I.D.A. | Escuela N.º 3 y Coro Municipal de Niños y Niñas",
      },
      {
        fecha: "2026-10-08",
        hora: "10:00",
        titulo: "Taller Municipal de Danzas Clásicas para las infancias",
      },
      {
        fecha: "2026-10-09",
        hora: "10:00",
        titulo: "Taller de Malambo – F.R.I.D.A. | Escuelas N.º 2 y 3",
      },
      {
        fecha: "2026-10-11",
        hora: "15:00",
        titulo: "Compañía Escénica Municipal – Grupo Infantojuvenil",
      },
    ],
  },
];