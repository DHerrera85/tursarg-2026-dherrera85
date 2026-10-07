import Link from "next/link";
import EventCard from "../../components/EventCard";
import { eventos } from "../../data/eventos";

export default function EventosPage() {
  return (
    <main>
      <section className="events-page">
        <div className="events-page-header">
          <Link href="/" className="back-link">
            ← Volver a TursArg
          </Link>

          <span className="eyebrow">AGENDA CULTURAL</span>

          <h1>Qué está pasando en Catamarca.</h1>

          <p>
            Descubrí festivales, música, teatro, ferias, muestras y
            actividades culturales para incorporar a tu recorrido.
          </p>
        </div>

        <div className="events-filters">
          <button type="button" className="active">
            Todos
          </button>
          <button type="button">Hoy</button>
          <button type="button">Este fin de semana</button>
          <button type="button">Este mes</button>
        </div>

        <div className="events-list">
          {eventos.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))}
        </div>
      </section>
    </main>
  );
}