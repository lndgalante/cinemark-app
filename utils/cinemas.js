const cinemas = [
  {
    cinemaId: 101,
    value: 'Hoyts Moron',
    label: 'Hoyts Morón',
    features: '8 SALAS | 2D, 3D Y DBOX',
    latitude: '-34.63588',
    longitude: '-58.62759',
    tags: [
      {
        tag: 'J.M. de Rosas 658, Plaza Oeste Shopping - Buenos Aires',
        link:
          'https://maps.google.com.ar/maps?q=Plaza+Oeste+Shopping,+Mor%C3%B3n&hl=es&ie=UTF8&ll=-34.63553,-58.626072&spn=0.007759,0.016512&sll=-38.020548,-57.589079&sspn=0.475481,1.056747&t=h&hq=Plaza+Oeste+Shopping,&hnear=Mor%C3%B3n,+Buenos+Aires&z=17&output=embed',
      },
      {
        tag: '8 SALAS | 2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 102,
    value: 'Hoyts Quilmes',
    label: 'Hoyts Quilmes',
    features: '12 SALAS | 2D, 3D Y 4D',
    latitude: '-34.75924',
    longitude: '-58.2784',
    tags: [
      {
        tag: 'Av. Calchaquí 3950, Quilmes Factory - Buenos Aires',
        link:
          'https://maps.google.com.ar/maps?q=Av+Calchaqu%C3%AD+3950,+Quilmes+Oeste,+Buenos+Aires&hl=es&ie=UTF8&ll=-34.759917,-58.278737&spn=0.003874,0.008256&sll=-34.659482,-58.618053&sspn=0.001939,0.004128&oq=Av.+Calchaqu%C3%AD+3950,+qui&t=h&hnear=Av+Calchaqu%C3%AD+3950,+Quilmes+Oeste,+Buenos+Aires&z=18&output=embed',
      },
      {
        tag: '12 SALAS | 2D, 3D Y 4D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 103,
    value: 'Hoyts Abasto',
    label: 'Hoyts Abasto',
    features: '12 SALAS | 2D, 3D Y DBOX',
    latitude: '-34.60363',
    longitude: '-58.41098',
    tags: [
      {
        tag: 'Av. Corrientes 3247, Abasto Shopping - Capital Federal',
        link:
          'https://maps.google.com.ar/maps?q=Av.+Corrientes+3247,+Buenos+Aires&hl=es&ll=-34.603925,-58.410423&spn=0.005489,0.008256&sll=-34.545033,-58.487619&sspn=0.007768,0.016512&t=h&hnear=Av+Corrientes+3247,+Balvanera,+Buenos+Aires&z=18&output=embed',
      },
      {
        tag: '12 SALAS | 2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 104,
    value: 'Hoyts Unicenter',
    label: 'Hoyts Unicenter',
    features: '16 SALAS | 2D, 3D, 4D Y PREMIUM CLASS',
    latitude: '-34.50742',
    longitude: '-58.5251',
    tags: [
      {
        tag: 'Paraná 3745, Unicenter Shopping - Buenos Aires',
        link:
          'https://maps.google.com.ar/maps?q=Unicenter+Shopping+-+Av+Paran%C3%A1+3745,+Mart%C3%ADnez,+Buenos+Aires&hl=es&ie=UTF8&sll=-34.56371,-58.697344&sspn=0.007766,0.016512&oq=Paran%C3%A1+3745,+unicen&t=h&hq=Unicenter+Shopping+-+Av+Paran%C3%A1+3745,+Mart%C3%ADnez,+Buenos+Aires&z=17&output=embed',
      },
      {
        tag: '16 SALAS | 2D, 3D, 4D Y PREMIUM CLASS',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 105,
    value: 'Hoyts Nuevocentro',
    label: 'Hoyts Nuevo Centro',
    features: '6 SALAS | 2D Y 3D',
    latitude: '-31.41306',
    longitude: '-64.2395',
    tags: [
      {
        tag: 'Duarte Quiros 1400, Nuevocentro Shopping - Córdoba',
        link:
          'https://maps.google.com.ar/maps?q=Duarte+Quir%C3%B3s+1400,+C%C3%B3rdoba&hl=es&ie=UTF8&ll=-31.413401,-64.205089&spn=0.008048,0.016512&sll=-34.507854,-58.525326&sspn=0.007771,0.016512&oq=Duarte+Quiros+1400&t=h&hnear=Av+Duarte+Quir%C3%B3s+1400,+C%C3%B3rdoba&z=17&output=embed',
      },
      {
        tag: '6 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 106,
    value: 'Hoyts Patio Olmos',
    label: 'Hoyts Patio Olmos',
    features: '8 SALAS | 2D Y 3D',
    latitude: '-31.4197',
    longitude: '-64.19072',
    tags: [
      {
        tag: 'Vélez Sarsfield 361, Patio Olmos Shopping - Córdoba',
        link:
          'https://maps.google.com.ar/maps?q=Patio+Olmos+Shopping,+C%C3%B3rdoba&hl=es&ie=UTF8&ll=-31.419682,-64.188191&spn=0.008048,0.016512&sll=-32.445198,-63.250084&sspn=0.007959,0.016512&t=h&hq=Patio+Olmos+Shopping,+C%C3%B3rdoba&radius=15000&z=17&output=embed',
      },
      {
        tag: '8 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 107,
    value: 'Hoyts Salta',
    label: 'Hoyts Salta',
    features: '8 SALAS | 2D Y 3D',
    latitude: '-24.78101',
    longitude: '-65.40344',
    tags: [
      {
        tag: 'Av. del Bicentenario de la Batalla de Salta (Ex Av. Virrey Toledo) 702 - Salta',
        link:
          'https://maps.google.com.ar/maps?q=Virrey+Toledo+702,+salta&hl=es&ll=-24.780627,-65.401418&spn=0.008562,0.016512&sll=-31.419682,-64.188191&sspn=0.008048,0.016512&t=h&hq=Virrey+Toledo+702,&hnear=Salta&z=17&iwloc=B&output=embed',
      },
      {
        tag: '8 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 109,
    value: 'Hoyts Temperley',
    label: 'Hoyts Temperley',
    features: '9 SALAS | 2D, 3D Y DBOX',
    latitude: '-34.78131',
    longitude: '-58.40678',
    tags: [
      {
        tag: 'Av. Hipólito Yrigoyen 10699, Coto de Temperley - Buenos Aires',
        link:
          'https://maps.google.com.ar/maps?q=Avenida+Hip%C3%B3lito+Yrigoyen+10699,+Temperley,+Buenos+Aires&hl=es&ie=UTF8&sll=-34.759917,-58.278737&sspn=0.003874,0.008256&oq=Av.+Hip%C3%B3lito+Yrigoyen+10699&t=h&hnear=Av+Hip%C3%B3lito+Yrigoyen+10699,+Temperley,+Buenos+Aires&z=17&output=embed',
      },
      {
        tag: '9 SALAS | 2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 110,
    value: 'Hoyts Moreno',
    label: 'Hoyts Moreno',
    features: '10 SALAS | 2D, 3D Y DBOX',
    latitude: '-34.63527',
    longitude: '-58.79197',
    tags: [
      {
        tag: 'Av. Victorica 1128, Nine Shopping - Buenos Aires',
        link:
          'https://maps.google.com.ar/maps?q=Av+Victorica+1128,+Moreno,+Buenos+Aires&hl=es&sll=-38.341656,-63.28125&sspn=59.36877,135.263672&oq=Av.+Victorica+1128&t=h&hnear=Av+Victorica+1128,+Moreno,+Buenos+Aires&z=17&output=embed',
      },
      {
        tag: '10 SALAS | 2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 111,
    value: 'Hoyts Dot',
    label: 'Hoyts Dot',
    features: '10 SALAS | 2D, 3D, XD Y PREMIUM CLASS',
    latitude: '-34.54573',
    longitude: '-58.48963',
    tags: [
      {
        tag: 'Vedia 3626, Dot Baires Mall - Capital Federal',
        link:
          'https://maps.google.com.ar/maps?q=Vedia+3626,+Buenos+Aires&hl=es&sll=-38.341656,-63.28125&sspn=59.36877,135.263672&oq=Vedia+3626&t=h&hnear=Vedia+3626,+Saavedra,+Buenos+Aires&z=17&iwloc=lyrftr:h,14464279257024760943,-34.545564,-58.488454&output=embed',
      },
      {
        tag: '10 SALAS | 2D, 3D, XD Y PREMIUM CLASS',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 114,
    value: 'Hoyts Rosario',
    label: 'Hoyts Rosario',
    features: '9 SALAS | 2D, 3D Y DBOX',
    latitude: '-32.90949',
    longitude: '-60.68282',
    tags: [
      {
        tag: 'Nansen 255, Portal Rosario - Rosario',
        link:
          'https://maps.google.com.ar/maps?q=Nansen+255,+Rosario,+Santa+Fe&amp;hl=es&amp;ie=UTF8&amp;ll=-32.9094883,-60.6828178&amp;spn=0.003874,0.008256&amp;sll=-32.9094883,-60.6828178&amp;sspn=0.001939,0.004128&amp;oq=ANansen+255,+Rosario,+Santa+Fe&amp;t=h&amp;hnear=Nansen+255,+Rosario,+Santa+Fe&amp;z=18&amp;output=embed',
      },
      {
        tag: '9 SALAS | 2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 730,
    value: 'Cinemark Puerto Madero',
    label: 'Cinemark Puerto Madero',
    features: '8 SALAS | 2D Y 3D',
    latitude: '-34.62169',
    longitude: '-58.36533',
    tags: [
      {
        tag: 'Av. Alicia Moreau de Justo 1920 - Puerto Madero - Capital Federal',
        link:
          'https://maps.google.com/maps?q=Av.+Alicia+Moreau+de+Justo+1920+%E2%80%93+Puerto+Madero&amp;hl=es&amp;ie=UTF8&amp;geocode=+&amp;hnear=Av+Alicia+Moreau+de+Justo+1920,+Puerto+Madero,+Buenos+Aires,+Argentina&amp;t=h&amp;hq=&amp;z=14&amp;iwloc=A&amp;output=embed',
      },
      {
        tag: '8 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 732,
    value: 'Cinemark Mendoza',
    label: 'Cinemark Mendoza',
    features: '10 SALAS | 2D, 3D, XD Y COMFORT',
    latitude: '-32.95334',
    longitude: '-68.85626',
    tags: [
      {
        tag: 'Av.Ruta Panamericana 2650, Godoy Cruz - Mendoza',
        link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6839.340371449342!2d-68.85958230772202!3d-32.954668448731105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0a4b589d1af9%3A0x23171e05be1d626c!2sCinemark+Palmares+Mendoza!5e1!3m2!1ses!2sar!4v1410478702658',
      },
      {
        tag: '10 SALAS | 2D, 3D, XD Y COMFORT',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 733,
    value: 'Cinemark Palermo',
    label: 'Cinemark Palermo',
    features: '10 SALAS | 2D Y 3D',
    latitude: '-34.58653',
    longitude: '-58.41057',
    tags: [
      {
        tag: 'Beruti 3399, Palermo - Capital Federal',
        link:
          'https://maps.google.com/maps?q=Beruti+3399,+Palermo,+Buenos+Aires&amp;hl=es&amp;sll=-31.657108,-60.706072&amp;sspn=0.020676,0.042272&amp;t=h&amp;hnear=Antonio+Beruti+3399,+Palermo,+Buenos+Aires,+Argentina&amp;ie=UTF8&amp;hq=&amp;z=14&amp;iwloc=A&amp;output=embed',
      },
      {
        tag: '10 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 734,
    value: 'Cinemark Caballito',
    label: 'Cinemark Caballito',
    features: '6 SALAS | 2D Y 3D',
    latitude: '-34.61618',
    longitude: '-58.42908',
    tags: [
      {
        tag: 'Av. La Plata 96 - Caballito - Capital Federal',
        link:
          'https://maps.google.com/maps?q=Av.+La+Plata+96+-+Caballito&amp;hl=es&amp;sll=-34.621554,-58.365297&amp;sspn=0.009994,0.021136&amp;t=h&amp;hnear=Av+la+Plata+96,+Almagro,+Buenos+Aires,+Argentina&amp;ie=UTF8&amp;hq=&amp;z=14&amp;iwloc=A&amp;output=embed',
      },
      {
        tag: '6 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 739,
    value: 'Cinemark Soleil',
    label: 'Cinemark Soleil',
    features: '6 SALAS | 2D Y 3D',
    latitude: '-34.49119',
    longitude: '-58.58848',
    tags: [
      {
        tag: 'Bernardo de Irigoyen 2647 - Soleil -Boulogne - Buenos Aires',
        link:
          'https://maps.google.com/maps?q=Bernardo+de+Irigoyen+2647,+Boulogne,+Buenos+Aires,+Argentina&amp;hl=es&amp;sll=-34.567109,-58.542124&amp;sspn=0.320031,0.676346&amp;oq=Bernardo+de+Irigoyen+2647++-Boulogne&amp;t=h&amp;hnear=Bernardo+de+Irigoyen+2647,+Boulogne,+Buenos+Aires,+Argentina&amp;ie=UTF8&amp;hq=&amp;z=14&amp;iwloc=A&amp;output=embed',
      },
      {
        tag: '6 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 745,
    value: 'Cinemark Santa Fe',
    label: 'Cinemark Santa Fe',
    features: '7 SALAS | 2D, 3D Y XD',
    latitude: '-31.65202',
    longitude: '-60.70151',
    tags: [
      {
        tag: 'Shopping La Ribera - Dique 1 - Puerto de Santa Fe - Santa Fe',
        link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.6731257436704!2d-60.701501399999856!3d-31.652020567641706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x367ccf1a65a8e01c!2sCinemark+Santa+Fe!5e1!3m2!1ses!2sar!4v1394137295477',
      },
      {
        tag: '7 SALAS | 2D, 3D Y XD',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 748,
    value: 'Cinemark San Justo',
    label: 'Cinemark San Justo',
    features: '6 SALAS |2D, 3D Y DBOX',
    latitude: '-34.68605',
    longitude: '-58.55987',
    tags: [
      {
        tag: 'Brigadier Juan Manuel de Rosas y Camino de Cintura, rotonda de San Justo - Buenos Aires',
        link:
          'https://maps.google.com/maps?q=Avenida+Camino+de+Cintura,+San+Justo,+Buenos+Aires,+Argentina&amp;hl=es&amp;sll=-34.58828,-58.338432&amp;sspn=0.159975,0.338173&amp;oq=Av.+Camino+de+Cin&amp;t=h&amp;hnear=Av+Camino+de+Cintura,+San+Justo,+Buenos+Aires,+Argentina&amp;ie=UTF8&amp;hq=&amp;z=14&amp;iwloc=A&amp;output=embed',
      },
      {
        tag: '6 SALAS |2D, 3D Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 749,
    value: 'Cinemark Malvinas Argentinas',
    label: 'Cinemark Malvinas Argentinas',
    features: '10 SALAS | 2D, 3D, XD Y DBOX',
    latitude: '-34.53042',
    longitude: '-58.70275',
    tags: [
      {
        tag: 'Ruta 8 y Ruta 202, Malvinas Argentinas - Buenos Aires',
        link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26295.159302112294!2d-58.702802804892755!3d-34.5308903254884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd18272d6a6b%3A0x69c980248a79ca71!2sCinemark+Malvinas+Argentinas!5e0!3m2!1ses!2sar!4v1409858641670',
      },
      {
        tag: '10 SALAS | 2D, 3D, XD Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 756,
    value: 'Cinemark Tortugas',
    label: 'Cinemark Tortuguitas',
    features: '8 SALAS | 2D Y 3D',
    latitude: '-34.45329',
    longitude: '-58.72943',
    tags: [
      {
        tag: 'Tortugas Open Mall - Ruta Panamericana - Km.36.5 - Ramal Pilar - Buenos Aires',
        link:
          'https://maps.google.com/maps?q=Ruta+Panamericana+-+Km.36.5+-+Ramal+Pilar&amp;hl=es&amp;sll=-34.615939,-58.428769&amp;sspn=0.009995,0.021136&amp;t=h&amp;hq=Ruta+Panamericana+-+Km.36.5+-+Ramal&amp;radius=15000&amp;ie=UTF8&amp;hnear=&amp;z=13&amp;output=embed',
      },
      {
        tag: '8 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 2013,
    value: 'Cinemark Salta',
    label: 'Cinemark Salta',
    features: '5 SALAS | 2D Y 3D',
    latitude: '-24.82051',
    longitude: '-65.41546',
    tags: [
      {
        tag: 'Av. Monseñor Tavella 4400 - Paseo Salta - Salta',
        link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2678699524085!2d-65.41545828530535!3d-24.820511415174565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2df0bbd18d9%3A0x7c9758070f30098d!2sAv.+Monse%C3%B1or+Tavella%2C+4400+Salta!5e0!3m2!1ses!2sar!4v1467836449946',
      },
      {
        tag: '5 SALAS | 2D Y 3D',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
  {
    cinemaId: 2014,
    value: 'Cinemark Neuquen',
    label: 'Cinemark Neuquén',
    features: '6 SALAS | 2D, 3D, XD Y DBOX',
    latitude: '-38.9420853',
    longitude: '-68.06701',
    tags: [
      {
        tag: 'Av. Dr. Ramón 355, Neuquén - Neuquen',
        link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.207673695726!2d-68.0670095846033!3d-38.94208377956381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33c231fdc349%3A0x679de521faca63b2!2sAv.+Dr.+Ram%C3%B3n+355%2C+Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1540491272791',
      },
      {
        tag: '6 SALAS | 2D, 3D, XD Y DBOX',
        link: 'https://www.cinemarkhoyts.com.ar/formatos',
      },
    ],
  },
]

export default cinemas
