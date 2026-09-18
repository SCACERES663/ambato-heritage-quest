import { createFileRoute } from "@tanstack/react-router";
import { MuseumPage } from "../components/MuseumPage";

// Esta ruta permite que el portal multipaginas.com.ar/museoambato
// sirva la misma página sin depender de basepath ni redirects.
export const Route = createFileRoute("/museoambato")({
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
  component: MuseumPage,
});
