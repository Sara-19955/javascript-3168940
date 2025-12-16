export let comic = {
  banners: [
    "./IMGS/banner 1.jpg",
    "./IMGS/banner2.jpg",
    "./IMGS/banner3.png",
    "./IMGS/banner4.jpg",
  ],

  nombreComic: "El eco que consquisto corazones",
  numeroCapitulos: 3,
  genero: "Fantasia",
  sinopsis:
    "En una noche mágica en Becerril, Rafael Orozco adulto regresa al lugar donde todo comenzó. El sonido lejano de un acordeón lo transporta al pasado, donde se encuentra con su versión infantil: un niño lleno de sueños, timidez y amor por la música.",

  autores: ["sara toro valencia"],
  year: 2025,

  personajes: [
    {
      id: 1,
      nombre: "Rafael Orozco",
      descripcion:
        "38 años, es un hombre de carisma, elegancia y disciplina, cuya voz y presencia conquistan multitudes. Su pasión por el vallenato define cada nota: vive profundamente su música, siempre impecable y conectado con su público. Ídolo de corazones, combina atractivo, talento y responsabilidad con su carrera y su familia dejando en cada canción un legado de amor, alegría y emoción",
      imagen: "./IMGS/rafael.png",
      clase: "personaje1",
    },
    {
      id: 2,
      nombre: "Rafael Orozco Niño",
      descripcion:
        "17 años,Niño humilde, con un talento natural para la música vallenata: desde pequeño cantaba o tocaba con oído fino, con ritmo y sentimiento auténtico. Alegre, carismático y humilde,  su voz atraía miradas y aplausos donde fuese. Con curiosidad, disciplina y ganas de aprender, participaba en concursos artísticos y ya destacaba entre los demás. Su sencillez y simpatía hacían que la gente lo recordara; había en él una promesa clara de futuro ídolo musical.",
      imagen: "./IMGS/niño.png",
      clase: "personaje2",
    },
    {
      id: 3,
      nombre: "Israel Romero",
      descripcion: "35 años, acordeonista de talento innato. Como figura clave del Binomio de Oro de América, supo plasmar amor y sentimiento en sus letras, creando himnos vallenatos que aún resuenan. Romántico empedernido, su música conectaba al público con emociones profundas. Responsable con su arte, dedicó su vida al vallenato, convirtiéndose en pilar del género.",
      imagen: "./IMGS/israel.jpg",
      clase: "personaje3",
    },

  ],

  capitulos: [
    {
      id: 1,
      nombre: "El Sueño en Becerril",
      portada: "./IMGS/caps/cap1.jpg", 
      descripcion:
        "Rafael adulto regresa a su pueblo y se reencuentra con su versión infantil. Entre acordes y recuerdos, el niño descubre el origen de su pasión por la música y el poder de cantar con el corazón.",
        
    },

    
    {
      id: 2,
      nombre: "Capítulo 2",
      portada: "./IMGS/caps/cap 2.jpg",
      descripcion:
        "Rafael enfrenta su primer gran reto en el Festival de la Leyenda Vallenata. Con nervios, talento y determinación, demuestra que su voz puede conquistar corazones más allá de los miedos.",
    },
    {
      id: 3,
      nombre: "Capítulo 3",
      portada: "./IMGS/caps/cap 3.jpg",
      descripcion:
        "Tras conocer a Israel Romero y formar el Binomio de Oro, Rafael lleva su música a nuevos escenarios. Su eco se vuelve eterno, recordando que el vallenato vive en quienes lo sienten y lo cantan.",
    },
  ],
};
