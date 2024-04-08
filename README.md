# Extensión de Chrome para eliminar los anuncios de Twitter

Creado utilizando Javascript

## Descripción

La extensión inyecta un script en el sitio web de Twitter para eliminar los tweets patrocinados

### Características

- Elimina los tweets patrocinados manipulando el DOM
- Utiliza la API de Mutation Observer para poder escuchar cambios en el DOM y poder eliminar anuncios dinámicos renderizados en el inicio, perfiles, tweets, modales de imágenes y anuncios nuevos producto del infinite scroll
- Elimina los nodos HTML hijos del nodo del anuncio para evitar la detección del ad-blocker por parte de Twitter
