# Protocolo de Publicación de Artículos (Asistente de IA)

Este documento sirve como recordatorio para el asistente de IA sobre los pasos que debe seguir automáticamente cada vez que el usuario solicite subir un nuevo artículo al blog.

## Checklist Automático para Nuevos Artículos

1. **Humanizar el Contenido (Tono y Perspectiva):** 
   - **Perspectiva del Autor:** El autor es un **estudiante de primero de Inteligencia Artificial**, NO un experto gurú. El tono debe ser de alguien que está aprendiendo y compartiendo sus descubrimientos con humildad y curiosidad. ¡Prohibido usar la palabra experto!
   - **Cero introducciones repetitivas:** NO empezar nunca los artículos con "Bienvenidos a una nueva entrega de SaaS Vision..." o fórmulas similares. Entrar directo al tema principal de forma natural y atractiva.
   - Adaptar el texto para que tenga un tono conversacional, humano y cercano, evitando a toda costa el estilo robótico y repetitivo de la IA genérica.

2. **Generar la Imagen Principal (Hero Image):**
   - **MUY IMPORTANTE:** Las imágenes **NO pueden parecerse entre sí**. Tienen que ser completamente variadas, distintas y muy atractivas para captar la atención del usuario.
   - **CERO ASPECTO "IA":** Las fotos deben verse 100% auténticas, como si hubiera un trabajo fotográfico real y humano detrás. Evitar a toda costa la estética típica y genérica de imágenes generadas por inteligencia artificial. La web debe transmitir que hay esfuerzo, curación y profesionalidad (manteniendo el buen nivel actual, sin volver al estilo de los inicios del proyecto).

3. **Creación del Archivo HTML:**
   - Crear el archivo del post dentro de la carpeta `/posts/`.
   - Utilizar como base el `article-template.html` o los estilos de los posts existentes.

4. **Enlazado Interno (Interlinking):**
   - Añadir enlaces estratégicos dentro del nuevo artículo hacia otros posts relevantes del blog.
   - Actualizar el `index.html` o la página principal para que el nuevo artículo aparezca listado.

5. **Actualización del Sitemap (SEO):**
   - Abrir el archivo `sitemap.xml`.
   - Añadir una nueva etiqueta `<url>` con la `<loc>` (URL completa), la fecha de modificación (`<lastmod>`), frecuencia y prioridad.

**Nota para el Asistente:** Ejecutar todos estos pasos de manera proactiva y directa sin necesidad de que el usuario los recuerde en cada petición.
