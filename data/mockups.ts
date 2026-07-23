/**
 * Fotografías reales (banco gratuito Unsplash) para las maquetas.
 * -----------------------------------------------------------------------
 * Archivos en `public/mockups/stock/`. Para cambiar una foto, sustituye el
 * archivo (mismo nombre) o edita la ruta aquí.
 *
 * Licencia Unsplash: uso libre, incl. comercial, sin atribución obligatoria.
 * Puedes reemplazarlas por fotos propias cuando quieras.
 */
const S = "/mockups/stock/";

/** Fotos de cabecera (héroe) de cada maqueta "después". */
export const mockupPhotos: Record<
  "restaurant" | "clinic" | "reform" | "gym",
  string
> = {
  restaurant: `${S}restaurant.jpg`,
  clinic: `${S}clinic.jpg`,
  reform: `${S}reform.jpg`,
  gym: `${S}gym.jpg`,
};

/**
 * Resto de imágenes: tarjetas de contenido de las webs "después" y fotos
 * (reales, con aspecto antiguo por diseño) de las webs "antes".
 */
export const mockupImages = {
  restaurant: {
    dishes: [`${S}rest_dish1.jpg`, `${S}rest_dish2.jpg`, `${S}rest_dish3.jpg`],
    old: `${S}rest_old.jpg`,
  },
  clinic: {
    old: `${S}clinic_old.jpg`,
  },
  reform: {
    projects: [`${S}reform_p1.jpg`, `${S}reform_p2.jpg`, `${S}reform_p3.jpg`],
    old: [`${S}reform_old1.jpg`, `${S}reform_old2.jpg`],
  },
  gym: {
    old: [`${S}gym_old1.jpg`, `${S}gym_old2.jpg`, `${S}gym_old3.jpg`],
  },
} as const;
