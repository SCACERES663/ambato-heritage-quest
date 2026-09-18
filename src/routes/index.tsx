import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  CalendarDays,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldAlert,
} from "lucide-react";

import museumAsset from "../assets/museo-ambato-780x470.png.asset.json";
import collectionAsset from "../assets/hotel_ambato.png.asset.json";
import robberyAsset from "../assets/coleccion-rosso-robada-del-museo-ambato-2279663.png.asset.json";
import museumPng from "../assets/museo-ambato-780x470.png";
import collectionPng from "../assets/hotel_ambato.png";
import robberyPng from "../assets/coleccion-rosso-robada-del-museo-ambato-2279663.png";

const museumImage = museumPng || museumAsset.url;
const collectionImage = collectionPng || collectionAsset.url;
const robberyImage = robberyPng || robberyAsset.url;

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Cta.%20del%20Lago%201469%2C%20X5172%20La%20Falda%2C%20C%C3%B3rdoba";
const whatsappUrl = "https://wa.me/5493548552786";

const chapters = [
  { id: "historia", label: "Historia", number: "01" },
  { id: "casona", label: "La casona", number: "02" },
  { id: "robo", label: "El robo", number: "03" },
  { id: "restauracion", label: "Restauración", number: "04" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Museo Arqueológico Argentino Ambato" },
      {
        name: "description",
        content:
          "Historia, patrimonio, robo y recuperación del Museo Arqueológico Argentino Ambato de La Falda, Córdoba.",
      },
      { property: "og:title", content: "Museo Arqueológico Argentino Ambato" },
      {
        property: "og:description",
        content:
          "Un recorrido por la colección arqueológica reunida por Aroldo Rosso y la recuperación del Museo Ambato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  number,
  eyebrow,
  children,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <header className="section-heading">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </header>
  );
}

function Index() {
  return (
    <main className="museum-page">
      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="Museo Ambato, inicio">
          <Landmark aria-hidden="true" />
          <span>
            Museo <strong>Ambato</strong>
          </span>
        </a>
        <nav aria-label="Secciones principales">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              <span>{chapter.number}</span> {chapter.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <img
          src={museumImage}
          alt="Casona histórica que alberga el Museo Arqueológico Argentino Ambato en La Falda"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-kicker">La Falda · Córdoba · Argentina</p>
          <h1 id="hero-title">
            Museo Arqueológico
            <span>Argentino Ambato</span>
          </h1>
          <p className="hero-summary">
            Una colección privada reunida por Aroldo Rosso, convertida en museo público para conservar
            los principales horizontes y culturas indígenas del noroeste argentino.
          </p>
          <div className="hero-actions">
            <a className="action-link action-primary" href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" /> Cómo llegar
            </a>
            <a className="action-link action-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
            <a className="icon-link" href="tel:+543548552786" aria-label="Llamar al 03548 55-2786">
              <Phone aria-hidden="true" />
            </a>
          </div>
          <p className="contact-note">
            Cta. del Lago 1469 · 03548 55-2786
          </p>
        </div>
        <a href="#historia" className="scroll-cue" aria-label="Continuar hacia la historia">
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="intro-band">
        <p className="intro-mark">A</p>
        <p>
          El Museo Arqueológico Argentino Ambato resguarda una notable colección de piezas de los pueblos
          originarios del noroeste argentino. Su historia une cuatro décadas de búsquedas, una casona de
          1930, una pérdida que conmovió a la comunidad y la decisión de recuperar un patrimonio de valor
          incalculable. Actualmente es gestionado por la Asociación Civil Amigos del Museo Ambato.
        </p>
      </section>

      <section id="historia" className="content-section section-light">
        <div className="content-wrap">
          <SectionHeading number="01" eyebrow="Primeros años">
            Cuarenta años reuniendo memoria
          </SectionHeading>
          <div className="editorial-grid">
            <article className="prose lead-prose">
              <p>
                Antes de abrir sus puertas, Ambato fue el proyecto privado de Aroldo Rosso, arqueólogo
                amateur que dedicó cuarenta años a búsquedas y excavaciones. Su colección mostraba la
                capacidad creadora y el desarrollo cultural alcanzado por los pueblos precolombinos que
                habitaron el noroeste argentino.
              </p>
              <p>
                El museo se inauguró para el público el 23 de octubre de 1987, durante el gobierno
                provincial de Eduardo Angeloz. Más de veinte salas permitían recorrer un arco temporal
                extraordinario: desde los horizontes precerámicos, representados por Ayampitin y Ampajango,
                hasta las sociedades que llegaron al contacto con los conquistadores españoles.
              </p>
            </article>
            <figure className="collection-figure">
              <img
                src={collectionImage}
                alt="Vasijas arqueológicas de la colección Ambato exhibidas en una vitrina"
                loading="lazy"
              />
              <figcaption>
                <span>La colección</span>
                Piezas de las culturas del noroeste argentino
              </figcaption>
            </figure>
          </div>

          <div className="cultures-block">
            <p className="eyebrow">Horizontes y culturas representadas</p>
            <ul aria-label="Culturas representadas en la colección">
              {["Ciénaga", "Condorhuasi", "Aguada", "Averías", "Belén", "Sunchituyoc", "Santamariana", "Yocavil"].map(
                (culture) => <li key={culture}>{culture}</li>,
              )}
            </ul>
          </div>

          <aside className="research-note">
            <Search aria-hidden="true" />
            <div>
              <p className="eyebrow">La Fase Ambato</p>
              <p>
                Investigadores y arqueólogos argentinos y extranjeros acompañaron el desarrollo del museo.
                Entre ellos, el Dr. Alberto Rex González realizó una datación por Carbono-14 de la Fase
                Ambato, vinculada a la cultura Aguada. El resultado la situó doscientos años antes de lo
                conocido para esa cultura, fechada entre 650 y 900 d. C. El descubrimiento fue atribuido a
                Rosso, quien excavó durante largo tiempo en el Departamento Ambato, Catamarca.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="casona" className="content-section section-dark">
        <div className="content-wrap">
          <SectionHeading number="02" eyebrow="Una casona suntuosa">
            Un edificio con muchas vidas
          </SectionHeading>
          <div className="house-layout">
            <div className="house-description prose">
              <p>
                La sede del museo tiene el porte de las grandes residencias de comienzos del siglo XX. Su
                arquitectura majestuosa y la arboleda que la rodea —rica en especies y distintas variedades
                de eucaliptos— forman parte inseparable de la experiencia del lugar.
              </p>
            </div>
            <ol className="timeline">
              <li>
                <span>1930</span>
                <p>Guillermo Valdés construyó la casona como residencia de verano.</p>
              </li>
              <li>
                <span>Después</span>
                <p>José Ferrarini la convirtió en el Petit Hotel u Hostería La Primavera.</p>
              </li>
              <li>
                <span>1958</span>
                <p>
                  La Congregación de Hermanas de la Sagrada Familia de Nazareth la compró y abrió el
                  Colegio San José.
                </p>
              </li>
              <li>
                <span>1969</span>
                <p>
                  La congregación se trasladó a su edificio propio junto a la Parroquia del Santísimo
                  Sacramento, en calle Patria 250.
                </p>
              </li>
              <li>
                <span>1987</span>
                <p>La casona comenzó a conservar y exhibir la colección reunida por Aroldo Rosso.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="robo" className="content-section robbery-section">
        <div className="content-wrap">
          <SectionHeading number="03" eyebrow="Decadencia y robo">
            El saqueo que dejó una herida abierta
          </SectionHeading>

          <div className="robbery-lead">
            <figure>
              <img
                src={robberyImage}
                alt="Policía junto a piezas arqueológicas recuperadas de la colección Ambato"
                loading="lazy"
              />
              <figcaption>Parte del patrimonio arqueológico identificado durante la investigación.</figcaption>
            </figure>
            <div className="robbery-intro">
              <ShieldAlert aria-hidden="true" />
              <p>
                La muerte de Aroldo Rosso en 1992 abrió una etapa de deterioro e incertidumbre. Las piezas
                quedaron en manos de sus sucesores y la gestión de la colección tomó un rumbo problemático.
                El conjunto era enorme, reunía testimonios excepcionales —en especial de la cultura
                Aguada— y, sin embargo, perdió la protección que exigían su importancia y fragilidad.
              </p>
            </div>
          </div>

          <div className="robbery-story">
            <article>
              <span className="story-index">I</span>
              <h3>Un traslado sin resguardo suficiente</h3>
              <p>
                En 1998, el municipio de La Falda trasladó las piezas desde la sede original al Hotel Edén.
                Allí continuaron expuestas, pero el lugar no contaba con las condiciones de seguridad,
                vigilancia e inventario necesarias. Durante años, vecinos de la ciudad reclamaron protección
                para un patrimonio que veían cada vez más vulnerable. Al mismo tiempo, el inmueble del museo
                fue destinado a otros usos, pese a las ordenanzas que reservaban la casona para su función
                museológica.
              </p>
            </article>
            <article>
              <span className="story-index">II</span>
              <h3>Una colección casi desaparecida</h3>
              <p>
                En febrero de 2008 se constató el saqueo; hacia mediados de marzo, la dimensión de la pérdida
                ya era inocultable. Las estimaciones no fueron uniformes: algunas fuentes hablaron de cerca
                del setenta por ciento y otras calcularon que faltaba aproximadamente el noventa y cinco por
                ciento de la colección. Una pista decisiva surgió cuando un coleccionista advirtió que en
                Córdoba se ofrecían objetos con la numeración del Museo Ambato.
              </p>
            </article>
            <article>
              <span className="story-index">III</span>
              <h3>Del museo al mercado ilegal</h3>
              <p>
                La numeración permitió pensar que no se trataba solamente de piezas sustraídas para una
                colección particular. Los objetos parecían haber ingresado en circuitos de compraventa y
                tráfico ilegal de patrimonio arqueológico. Por ese alcance, la Corte determinó que la causa
                debía quedar en manos de la Justicia Federal.
              </p>
            </article>
          </div>

          <div className="recovery-panel">
            <div className="recovery-title">
              <Search aria-hidden="true" />
              <p className="eyebrow">Buenos Aires · 2012</p>
              <h3>Las piezas comenzaron a reaparecer</h3>
            </div>
            <div className="prose recovery-copy">
              <p>
                Cuatro años después, Interpol, el Departamento de Protección de Patrimonio Cultural y
                especialistas del INAPL realizaron allanamientos en Buenos Aires. En un depósito de la calle
                Libertad al 800 encontraron cerca de sesenta objetos identificados como parte de la colección
                Ambato. Cincuenta y ocho piezas recuperadas fueron valuadas, en conjunto, entre setecientos
                mil y un millón de dólares.
              </p>
              <p>
                Muchas estaban en poder del coleccionista Matteo Goretti, entonces presidente de la Fundación
                Pensar y asesor de Mauricio Macri. El hallazgo dio lugar a una investigación sobre la
                procedencia de los objetos y a una imputación por supuesto encubrimiento. Sin embargo, esto no
                equivale a afirmar que hubiera sido condenado por organizar el robo: en 2013 obtuvo falta de
                mérito respecto del delito principal mientras la investigación continuaba.
              </p>
              <p>
                El punto central nunca terminó de resolverse por completo. No quedó claramente establecido
                quién ejecutó materialmente el saqueo ni cómo se organizó la salida de semejante cantidad de
                piezas. La secuencia que pudo reconstruirse fue la de un museo mal protegido, una desaparición
                masiva, objetos ofrecidos en circuitos de coleccionistas, una investigación por tráfico ilegal
                y la recuperación parcial del patrimonio, sin responsables materiales definidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="restauracion" className="content-section restoration-section">
        <div className="content-wrap">
          <SectionHeading number="04" eyebrow="Restauración y puesta en valor">
            La comunidad sostuvo la memoria
          </SectionHeading>
          <div className="restoration-grid">
            <div className="prose">
              <p>
                Desde 2002, vecinos autoconvocados de La Falda trabajaron para recuperar el museo. Su impulso,
                junto con la Ley Nacional 25.743 de Protección del Patrimonio Arqueológico y Paleontológico,
                sancionada en 2003 durante la presidencia de Néstor Kirchner, abrió un camino para proteger e
                inventariar nuevamente la colección.
              </p>
              <p>
                La Asociación Civil Amigos del Museo Ambato denunció el robo para promover la causa penal y
                participó en un recurso de amparo iniciado en 2004 ante el Juzgado Federal 2 de Córdoba. El
                objetivo era aplicar la ley, crear un registro arqueológico provincial y concretar el
                inventario definitivo de las piezas.
              </p>
              <p>
                En 2012, integrantes de la Asociación y el intendente Eduardo Arduh se reunieron en Buenos Aires
                con el secretario de Cultura de la Nación, Jorge Coscia, para pedir apoyo destinado a reabrir
                la sala arqueológica luego de la recuperación de numerosas piezas.
              </p>
            </div>
            <aside className="opening-card">
              <CalendarDays aria-hidden="true" />
              <p className="eyebrow">29 de octubre de 2015</p>
              <h3>El museo volvió a abrir sus salas</h3>
              <p>
                Cristina Fernández de Kirchner inauguró por teleconferencia, desde la Casa Rosada, las obras
                de restauración y puesta en valor. La ministra de Cultura Teresa Parodi destacó desde el museo
                que sus dieciséis salas habían sido recuperadas en su totalidad.
              </p>
              <dl>
                <div>
                  <dt>16</dt>
                  <dd>salas restauradas</dd>
                </div>
                <div>
                  <dt>+500</dt>
                  <dd>piezas precolombinas</dd>
                </div>
                <div>
                  <dt>5 M</dt>
                  <dd>de pesos invertidos</dd>
                </div>
              </dl>
              <p>
                Algunas de las piezas conservadas datan del año 500 d. C. y poseen un valor incalculable.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="visit-band" aria-labelledby="visit-title">
        <div>
          <p className="eyebrow">Museo Arqueológico Argentino Ambato</p>
          <h2 id="visit-title">Conocé este patrimonio en La Falda</h2>
          <p>Cta. del Lago 1469, X5172 La Falda, Córdoba</p>
        </div>
        <div className="visit-actions">
          <a className="action-link action-primary" href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" /> Abrir en Google Maps
          </a>
          <a className="action-link action-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Escribir por WhatsApp
          </a>
          <a className="text-link" href="tel:+543548552786">
            <Phone aria-hidden="true" /> Llamar al 03548 55-2786
          </a>
        </div>
      </section>

      <footer>
        <div className="wordmark">
          <Landmark aria-hidden="true" />
          <span>
            Museo <strong>Ambato</strong>
          </span>
        </div>
        <p>Gestionado por la Asociación Civil Amigos del Museo Ambato · La Falda, Córdoba</p>
      </footer>
    </main>
  );
}