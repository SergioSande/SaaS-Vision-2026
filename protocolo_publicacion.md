# Protocolo de Publicación de Artículos (Asistente de IA)

Este documento sirve como recordatorio para el asistente de IA sobre los pasos que debe seguir automáticamente cada vez que el usuario solicite subir un nuevo artículo al blog.

## Checklist Automático para Nuevos Artículos

1. **Humanizar el Contenido (Tono y Perspectiva):**
   - **Perspectiva del Autor:** El autor es un **estudiante de primero de Inteligencia Artificial**, NO un experto gurú. El tono debe ser de alguien que está aprendiendo y compartiendo sus descubrimientos con humildad y curiosidad. ¡Prohibido usar la palabra experto!
   - **Cero introducciones repetitivas:** NO empezar nunca los artículos con "Bienvenidos a una nueva entrega de SaaS Vision..." o fórmulas similares. Entrar directo al tema principal de forma natural y atractiva.
   - Adaptar el texto para que tenga un tono conversacional, humano y cercano, evitando a toda costa el estilo robótico y repetitivo de la IA genérica. Importante también no prometer ni decir lo próximo que se va a publicar.

2. **Generar la Imagen Principal (Hero Image):**
   - **MUY IMPORTANTE:** Las imágenes **NO pueden parecerse entre sí**. Tienen que ser completamente variadas, distintas y muy atractivas para captar la atención del usuario.
   - **CERO ASPECTO "IA":** Las fotos deben verse 100% auténticas, como si hubiera un trabajo fotográfico real y humano detrás. Evitar a toda costa la estética típica y genérica de imágenes generadas por inteligencia artificial. La web debe transmitir que hay esfuerzo, curación y profesionalidad (manteniendo el buen nivel actual, sin volver al estilo de los inicios del proyecto).

3. **Creación del Archivo HTML:**
   - Crear el archivo del post dentro de la carpeta `/posts/`.
   - Utilizar como base el `article-template.html` o los estilos de los posts existentes.
   - **Navegación y Pie de Página:** Asegurarse de que el menú de cristal (`<header>`) incluya siempre el enlace a Inicio, Biblioteca y Sobre mí. Además, **el pie de página (`<footer>`) debe incluir siempre el enlace a Contacto (`../contacto.html`)**, Aviso Legal, Política de Privacidad y Política de Cookies.
   - **Favicon:** Incluir siempre el código del icono (en formato **PNG**) en la etiqueta `<head>` con la ruta relativa correcta (con los dos puntos) para que el logo se vea en todas las páginas:
     `<link rel="icon" type="image/png" href="../assets/favicon.png">`
     `<link rel="apple-touch-icon" href="../assets/favicon.png">`
   - **Botón de Compartir:** Incluir siempre el botón de "Copiar enlace" y el mensaje de éxito oculto dentro del contenedor `<div class="article-meta">` para facilitar que los usuarios difundan el artículo.

4. **Actualización de la Portada y la Biblioteca (NUEVO SISTEMA):**
   - **Añadir a la Biblioteca:** Generar el bloque de la tarjeta (post-card) del nuevo artículo y añadirlo SIEMPRE en la primera posición de `biblioteca.html`.
   - **Añadir a la Portada (`index.html`):** Añadir la misma tarjeta en la primera posición de `index.html`.
   - **Regla de los 6 artículos:** La portada **SOLO puede mostrar un máximo de 6 artículos**. Al insertar uno nuevo arriba, el asistente debe proporcionar instrucciones claras para eliminar el artículo más antiguo (el último de abajo) del archivo `index.html` para mantener la cuadrícula limpia.

5. **Enlazado Interno (Interlinking):**
   - Añadir enlaces estratégicos dentro del nuevo artículo hacia otros posts relevantes del blog.

6. **Actualización del Sitemap (SEO):**
   - Abrir el archivo `sitemap.xml`.
   - Añadir una nueva etiqueta `<url>` con la `<loc>` (URL completa), la fecha de modificación (`<lastmod>`), frecuencia y prioridad.

**Nota para el Asistente:** Ejecutar todos estos pasos de manera proactiva y directa, entregando al usuario los fragmentos de código listos para `posts/`, `biblioteca.html`, `index.html` y el `sitemap.xml`, sin necesidad de que el usuario lo pida explícitamente.