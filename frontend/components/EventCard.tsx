import Link from "next/link";

import type { Evento } from "../data/eventos";

type EventCardProps = {
  evento: Evento;
};

export default function EventCard({ evento }: EventCardProps) {
  return (
    <article className="event-feature">
      <div className="event-date">
        <span>{evento.categoria.toUpperCase()}</span>
        <strong>{evento.localidad}</strong>
      </div>

      <div className="event-content">
        <span className="event-label">EVENTOS EN {evento.localidad.toUpperCase()}</span>

        <h3>{evento.titulo}</h3>

        <p>{evento.descripcion}</p>

        <div className="event-meta">
          <span>
            <strong>Fecha</strong>
            {evento.fecha}
          </span>

          <span>
            <strong>Hora</strong>
            {evento.hora}
          </span>

          <span>
            <strong>Lugar</strong>
            {evento.lugar}
          </span>
        </div>

        <Link href="/eventos" className="event-link">
          Ver agenda
        </Link>
      </div>
    </article>
  );
}