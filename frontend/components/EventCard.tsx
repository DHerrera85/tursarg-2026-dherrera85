import Link from "next/link";

import type { Evento } from "../data/eventos";

type EventCardProps = {
  evento: Evento;
};

function formatearFecha(fecha: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${fecha}T00:00:00Z`));
}

export default function EventCard({ evento }: EventCardProps) {
  const fechaInicio = formatearFecha(evento.fechaInicio);
  const fechaFin = evento.fechaFin
    ? formatearFecha(evento.fechaFin)
    : null;

  return (
    <article className="event-feature">
      <div className="event-date">
        <span>{evento.categoria.toUpperCase()}</span>

        <strong>
          {fechaInicio}
          {fechaFin && (
            <>
              <br />
              <small>al {fechaFin}</small>
            </>
          )}
        </strong>
      </div>

      <div className="event-content">
        <span className="event-label">
          EVENTO EN {evento.localidad.toUpperCase()}
        </span>

        <h3>{evento.titulo}</h3>

        <p>{evento.descripcion}</p>

        <div className="event-meta">
          <span>
            <strong>Lugar</strong>
            {evento.lugar}
          </span>

          {evento.gratuito && (
            <span>
              <strong>Acceso</strong>
              Entrada gratuita
            </span>
          )}

          <span>
            <strong>Estado</strong>
            {evento.estado === "verificado"
              ? "Información verificada"
              : evento.estado}
          </span>
        </div>

        <div className="event-actions">
          <Link href="/eventos" className="event-link">
            Ver programación
          </Link>

          <a
            href={evento.fuente.url}
            target="_blank"
            rel="noopener noreferrer"
            className="event-source"
          >
            Fuente oficial ↗
          </a>
        </div>
      </div>
    </article>
  );
}