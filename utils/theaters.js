const theaters = [
  {
    value: 'Hoyts Salta',
    label: 'Hoyts Salta',
    latitude: -24.7814302,
    longitude: -65.4053517,
    tags: [
      {
        tag: 'Av. del Bicentenario de la Batalla de Salta 702',
        link: 'https://goo.gl/maps/32KQXXYZnGq',
      },
      {
        tag: '8 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Salta',
    label: 'Cinemark Salta',
    latitude: -24.832276,
    longitude: -65.4306437,
    tags: [
      {
        tag: 'Av. Monseñor Tavella 4400',
        link: 'https://goo.gl/maps/3mBYDwsMKZR2',
      },
      {
        tag: '5 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Nuevocentro',
    label: 'Hoyts Nuevo Centro',
    latitude: -31.4130601,
    longitude: -64.2043521,
    tags: [
      {
        tag: 'Duarte Quiros 1400',
        link: 'https://goo.gl/maps/vkt3xDYPxwz',
      },
      {
        tag: '6 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Patio Olmos',
    label: 'Hoyts Patio Olmos',
    latitude: -31.4199002,
    longitude: -64.1880835,
    tags: [
      {
        tag: 'Vélez Sarsfield 361',
        link: 'https://goo.gl/maps/bz57MzrMifx',
      },
      {
        tag: '8 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Quilmes',
    label: 'Hoyts Quilmes',
    latitude: -31.4844684,
    longitude: -64.1439819,
    tags: [
      {
        tag: 'Av. Calchaquí 3950',
        link: 'https://goo.gl/maps/3s9Na1JqLm12',
      },
      {
        tag: '12 Salas | 2D, 3D y 4D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Mendoza',
    label: 'Cinemark Mendoza',
    latitude: -32.9548038,
    longitude: -68.8617119,
    tags: [
      {
        tag: 'Av.Ruta Panamericana 2650',
        link: 'https://goo.gl/maps/Ji7dkjLPkB72',
      },
      {
        tag: '10 Salas | 2D, 3D, XD y COMFORT',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Santa Fe',
    label: 'Cinemark Santa Fe',
    latitude: -31.6517446,
    longitude: -60.7014912,
    tags: [
      {
        tag: 'Shopping La Ribera',
        link: 'https://goo.gl/maps/FAaaUowrHp92',
      },
      {
        tag: '7 Salas | 2D, 3D y XD',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Rosario',
    label: 'Hoyts Rosario',
    latitude: -32.9094883,
    longitude: -60.6850065,
    tags: [
      {
        tag: 'Nansen 255',
        link: 'https://goo.gl/maps/sNKHsJy7nYE2',
      },
      {
        tag: '9 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Tortugas',
    label: 'Cinemark Tortuguitas',
    latitude: -34.4514319,
    longitude: -58.7290022,
    tags: [
      {
        tag: 'Tortugas Open Mall',
        link: 'https://goo.gl/maps/C8JhNfPU8wP2',
      },
      {
        tag: '8 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Soleil',
    label: 'Cinemark Soleil',
    latitude: -34.491282,
    longitude: -58.5940757,
    tags: [
      {
        tag: 'Bernardo de Irigoyen 2647',
        link: 'https://goo.gl/maps/34iZ4qJTdny',
      },
      {
        tag: '6 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Malvinas Argentinas',
    label: 'Cinemark Malvinas Argentinas',
    latitude: -34.530711,
    longitude: -58.703362,
    tags: [
      {
        tag: 'Ruta 8 y Ruta 202',
        link: 'https://goo.gl/maps/aynrwbtfZSL2',
      },
      {
        tag: '10 Salas | 2D, 3D, XD y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Unicenter',
    label: 'Hoyts Unicenter',
    latitude: -34.508351,
    longitude: -58.5263577,
    tags: [
      {
        tag: 'Paraná 3745',
        link: 'https://goo.gl/maps/WJBdq3ZBkAn',
      },
      {
        tag: '16 Salas | 2D, 3D, 4D y Premium',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Moreno',
    label: 'Hoyts Moreno',
    latitude: -34.63504,
    longitude: -58.7942078,
    tags: [
      {
        tag: 'Av. Victorica 1128',
        link: 'https://goo.gl/maps/azEmxqKkygH2',
      },
      {
        tag: '10 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Dot',
    label: 'Hoyts Dot',
    latitude: -34.5463547,
    longitude: -58.490594,
    tags: [
      {
        tag: 'Vedia 3626',
        link: 'https://goo.gl/maps/SopvUt1YYu42',
      },
      {
        tag: '10 Salas | 2D, 3D, XD y Premium',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Moron',
    label: 'Hoyts Morón',
    latitude: -34.6349862,
    longitude: -58.6315444,
    tags: [
      {
        tag: 'J.M. de Rosas 658',
        link: 'https://goo.gl/maps/NQqDJH8GzM82',
      },
      {
        tag: '8 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Palermo',
    label: 'Cinemark Palermo',
    latitude: -34.5864418,
    longitude: -58.4103114,
    tags: [
      {
        tag: 'Beruti 3399',
        link: 'https://goo.gl/maps/5Sdif5r6xoC2',
      },
      {
        tag: '10 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Abasto',
    label: 'Hoyts Abasto',
    latitude: -34.6034662,
    longitude: -58.4130245,
    tags: [
      {
        tag: 'Av. Corrientes 3247',
        link: 'https://goo.gl/maps/jCYSe2JkMHP2',
      },
      {
        tag: '12 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Caballito',
    label: 'Cinemark Caballito',
    latitude: -34.616324,
    longitude: -58.4309907,
    tags: [
      {
        tag: 'Av. La Plata 96',
        link: 'https://goo.gl/maps/FHnUWgBHB292',
      },
      {
        tag: '6 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Puerto Madero',
    label: 'Cinemark Puerto Madero',
    latitude: -34.6210811,
    longitude: -58.3669983,
    tags: [
      {
        tag: 'Av. Alicia Moreau de Justo 1920',
        link: 'https://goo.gl/maps/qJsoSLokru42',
      },
      {
        tag: '8 Salas | 2D y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark San Justo',
    label: 'Cinemark San Justo',
    latitude: -34.6863236,
    longitude: -58.5570026,
    tags: [
      {
        tag: 'Brigadier Juan Manuel de Rosas y Camino de Cintura',
        link: 'https://goo.gl/maps/t8xYLh4Turp',
      },
      {
        tag: '6 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Hoyts Temperley',
    label: 'Hoyts Temperley',
    latitude: -34.7826651,
    longitude: -58.4084575,
    tags: [
      {
        tag: ' Av. Hipólito Yrigoyen 10699',
        link: 'https://goo.gl/maps/r1BAeHBtn1o',
      },
      {
        tag: '9 Salas | 2D, 3D y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    value: 'Cinemark Neuquen',
    label: 'Cinemark Neuquén',
    latitude: -38.9420838,
    longitude: -68.0648209,
    tags: [
      {
        tag: 'Av. Dr. Ramón 355',
        link: 'https://goo.gl/maps/uFhupJFLZqz',
      },
      {
        tag: '6 Salas | 2D, 3D, XD y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
]

export default theaters
