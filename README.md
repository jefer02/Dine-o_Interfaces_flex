# Flex Dashboard

Réplica del panel de control "Flex" construida con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y **lucide-react** para los íconos.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx        -> layout raíz, carga la fuente Plus Jakarta Sans
  page.tsx           -> ensambla el dashboard completo
  globals.css         -> estilos base + tailwind
components/
  Sidebar.tsx         -> menú lateral (Menu / Integrations / Logout)
  Navbar.tsx          -> barra superior (búsqueda, balance, perfil)
  StatCard.tsx        -> tarjetas de Total Sales / Visitors / Orders
  SessionsCard.tsx    -> tarjeta "Online Store Sessions"
  SessionsChart.tsx   -> gráfico de línea + selector de días
  ConversionGauge.tsx -> gauge semicircular de conversión
  ProCard.tsx         -> tarjeta promocional "Go Pro"
```

## Paleta de tokens (tailwind.config.js)

| Token           | Hex       | Uso                                  |
|-----------------|-----------|---------------------------------------|
| `canvas`        | `#F8F9FA` | Fondo general                        |
| `panel`         | `#F1F2F6` | Contenedor gris del dashboard        |
| `primary`       | `#6C5CE7` | Acento morado (activo, gráficos)     |
| `accent`        | `#00B894` | Verde (crecimiento, CTA)             |
| `brand`         | `#FFC048` | Amarillo del logo                    |
| `danger`        | `#FF6B6B` | Indicadores negativos                |
| `ink`           | `#1E1E2F` | Texto principal                      |
| `ink-muted`     | `#8A8D9F` | Texto secundario                     |

## Notas

- El diseño es responsive: el sidebar se oculta en pantallas menores a `lg` (puedes conectarle un botón de menú hamburguesa si lo necesitas para móvil).
- Los datos (ventas, visitantes, etc.) están hardcodeados en `app/page.tsx` — reemplázalos por tu fuente de datos real (API, CMS, etc.) cuando lo integres.
- Los íconos vienen de [`lucide-react`](https://lucide.dev/).
