export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a className="brand" href="#inicio" aria-label="TursArg - Inicio">
            TursArg
          </a>

          <div className="nav-links">
            <a href="#explorar">Explorar</a>
            <a href="#rutas">Rutas</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#jugando">Descubrí jugando</a>
            <a href="#datos-utiles">Datos útiles</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">DESCUBRÍ CATAMARCA</span>

            <h1>
              Catamarca,
              <br />
              increíble por naturaleza.
            </h1>

            <p className="hero-description">
              Explorá paisajes, cultura, historia y experiencias para descubrir
              la provincia a tu manera.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#explorar">
                Explorar lugares
              </a>

              <a className="button button-secondary" href="#jugando">
                Descubrir jugando
              </a>
            </div>
          </div>

          <div className="hero-placeholder" aria-hidden="true">
            <span>CATAMARCA</span>
            <strong>Montaña · Cultura · Aventura</strong>
          </div>
        </section>

        <section className="section now-section" id="experiencias">
          <div className="section-heading">
            <span className="eyebrow">AHORA EN CATAMARCA</span>
            <h2>La ciudad también se descubre por lo que está pasando.</h2>
            <p>
              Festivales, música, teatro, ferias, muestras y encuentros para
              incorporar la cultura de Catamarca a tu recorrido.
            </p>
          </div>

          <div className="event-feature">
            <div className="event-date">
              <span>AGENDA</span>
              <strong>Cultural</strong>
            </div>

            <div className="event-content">
              <span className="event-label">EVENTOS EN CAPITAL</span>
              <h3>Descubrí qué hacer durante tu estadía.</h3>
              <p>
                Explorá actividades culturales y descubrí qué lugares podés
                incorporar antes o después de cada evento.
              </p>

              <div className="event-tags">
                <span>Música</span>
                <span>Teatro</span>
                <span>Ferias</span>
                <span>Festivales</span>
                <span>Muestras</span>
              </div>

              <button type="button">Explorar agenda</button>
            </div>
          </div>
        </section>

        <section className="section capital-section" id="explorar">
          <div className="section-heading">
            <span className="eyebrow">EXPLORÁ CAPITAL</span>
            <h2>Una ciudad, distintas formas de recorrerla.</h2>
            <p>
              Empezamos por San Fernando del Valle de Catamarca para conectar
              lugares, cultura, actividades y recorridos en una misma experiencia.
            </p>
          </div>

          <div className="category-grid">
            <article>
              <span>01</span>
              <h3>Cultura</h3>
              <p>Museos, espacios culturales, música, teatro y expresiones locales.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Historia</h3>
              <p>Patrimonio, arquitectura y lugares que cuentan la historia de la ciudad.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Naturaleza</h3>
              <p>Paisajes y espacios naturales para descubrir cerca de la ciudad.</p>
            </article>

            <article>
              <span>04</span>
              <h3>Artesanías</h3>
              <p>Textiles, producción artesanal y saberes vinculados a la identidad local.</p>
            </article>

            <article>
              <span>05</span>
              <h3>Gastronomía</h3>
              <p>Sabores y experiencias gastronómicas para sumar al recorrido.</p>
            </article>
          </div>
        </section>

        <section className="route-section" id="rutas">
          <div>
            <span className="eyebrow">MI RECORRIDO</span>
            <h2>Catamarca según tu viaje.</h2>
            <p>
              Elegí desde dónde partís, cuánto tiempo tenés y qué te interesa.
              TursArg te ayudará a descubrir alternativas para tu recorrido.
            </p>
          </div>

          <div className="route-builder">
            <div>
              <span>Desde</span>
              <strong>¿Dónde estás?</strong>
            </div>

            <div>
              <span>Tiempo</span>
              <strong>¿Cuánto tenés?</strong>
            </div>

            <div>
              <span>Intereses</span>
              <strong>¿Qué buscás?</strong>
            </div>

            <button type="button">Armar recorrido</button>
          </div>
        </section>

        <section className="section discovery-section" id="jugando">
          <div className="section-heading">
            <span className="eyebrow">DESCUBRÍ JUGANDO</span>
            <h2>Conocer también puede ser un desafío.</h2>
            <p>
              Trivias, paisajes y desafíos para aprender sobre Catamarca
              mientras la explorás.
            </p>
          </div>

          <div className="challenge-card">
            <span>DESAFÍO 01</span>
            <h3>¿Cuánto conocés de Catamarca?</h3>
            <p>
              Poné a prueba tus conocimientos sobre su geografía, cultura e
              historia.
            </p>
            <button type="button">Comenzar desafío</button>
          </div>
        </section>

        <section className="useful-section" id="datos-utiles">
          <span className="eyebrow">ANTES DE VIAJAR</span>
          <h2>Datos útiles para tu recorrido.</h2>
          <p>
            Información práctica para acompañarte antes y durante tu viaje por
            Catamarca.
          </p>
        </section>
      </main>

      <footer>
        <strong>TursArg</strong>
        <p>Descubrí Catamarca. Explorá, aprendé y armá tu recorrido.</p>
      </footer>
    </>
  );
}