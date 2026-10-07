export type Evento = {
  id: number;
  titulo: string;
  categoria: "Música" | "Teatro" | "Feria" | "Festival" | "Muestra";
  fecha: string;
  hora: string;
  lugar: string;
  localidad: string;
  descripcion: string;
  destacado: boolean;
};

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Agenda cultural de Catamarca Capital",
    categoria: "Festival",
    fecha: "2026-10-01",
    hora: "18:00",
    lugar: "San Fernando del Valle de Catamarca",
    localidad: "Capital",
    descripcion:
      "Eventos, encuentros y experiencias culturales para incorporar a tu recorrido por la ciudad.",
    destacado: true,
  },
];