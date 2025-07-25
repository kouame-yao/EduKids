const CP1exercice5 = {
  Mathématique: [
    {
      id: 1,
      title: "Compter jusqu'à 20",
      question: "Quel nombre vient après 10 ?",
      result: ["11"],
      infoErro: "La bonne réponse était : 11.",
      infosucces: "Bravo ! Après 10 vient 11 dans l'ordre des nombres.",
      type: "choix",
      option: ["9", "11", "12", "10", "20"],
    },
    {
      id: 2,
      title: "Compter jusqu'à 20",
      question: "15 vient avant 16",
      result: ["vrai"],
      infoErro: "La bonne réponse était : vrai.",
      infosucces: "C'est vrai ! Dans l'ordre : 15, puis 16.",
      type: "booleen",
    },
    {
      id: 3,
      title: "Compter jusqu'à 20",
      question: "Compte les étoiles : ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
      result: ["12"],
      infoErro: "La bonne réponse était : 12.",
      infosucces: "Excellent ! Il y a bien 12 étoiles ⭐.",
      type: "choix",
      option: ["10", "11", "12", "13", "14"],
    },
    {
      id: 4,
      title: "Compter jusqu'à 20",
      question: "Écris le nombre qui vient avant 19",
      result: ["18"],
      infoErro: "La bonne réponse était : 18.",
      infosucces: "Parfait ! Le nombre qui vient avant 19 est 18.",
      type: "input",
    },
    {
      id: 5,
      title: "Compter jusqu'à 20",
      question: "Quel est le plus grand nombre : 17 ou 14 ?",
      result: ["17"],
      infoErro: "La bonne réponse était : 17.",
      infosucces: "Bravo ! 17 est plus grand que 14.",
      type: "choix",
      option: ["14", "15", "16", "17", "18"],
    },
    // {
    //   id: 6,
    //   title: "Compter jusqu'à 20",
    //   question: "20 est le plus grand nombre jusqu'à 20",
    //   result: ["vrai"],
    //   infoErro: "La bonne réponse était : vrai.",
    //   infosucces: "C'est vrai ! 20 est bien le plus grand nombre jusqu'à 20.",
    //   type: "booleen",
    // },
    // {
    //   id: 7,
    //   title: "Compter jusqu'à 20",
    //   question: "Compte les cœurs : ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
    //   result: ["15"],
    //   infoErro: "La bonne réponse était : 15.",
    //   infosucces: "Super ! Il y a 15 cœurs ❤️.",
    //   type: "choix",
    //   option: ["13", "14", "15", "16", "17"],
    // },
    // {
    //   id: 8,
    //   title: "Compter jusqu'à 20",
    //   question: "13 est plus petit que 18",
    //   result: ["vrai"],
    //   infoErro: "La bonne réponse était : vrai.",
    //   infosucces: "C'est vrai ! 13 est plus petit que 18.",
    //   type: "booleen",
    // },
    // {
    //   id: 9,
    //   title: "Compter jusqu'à 20",
    //   question: "Écris le nombre qui vient après 16",
    //   result: ["17"],
    //   infoErro: "La bonne réponse était : 17.",
    //   infosucces: "Excellent ! Après 16 vient 17.",
    //   type: "input",
    // },
    // {
    //   id: 10,
    //   title: "Compter jusqu'à 20",
    //   question: "Compte les ballons : 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈",
    //   result: ["18"],
    //   infoErro: "La bonne réponse était : 18.",
    //   infosucces: "Parfait ! Il y a 18 ballons 🎈. Tu comptes très bien !",
    //   type: "choix",
    //   option: ["16", "17", "18", "19", "20"],
    // },
  ],

  Français: [
    {
      id: 1,
      title: "Phrases simples",
      question: "Lis cette phrase : 'Le chat mange.' Qui mange ?",
      result: ["le chat"],
      infoErro: "La bonne réponse était : le chat.",
      infosucces: "Bravo ! Dans la phrase, c'est le chat qui mange 🐱.",
      type: "choix",
      option: ["le chien", "le chat", "l'oiseau", "le poisson", "la souris"],
    },
    {
      id: 2,
      title: "Phrases simples",
      question: "Une phrase commence toujours par une majuscule",
      result: ["vrai"],
      infoErro: "La bonne réponse était : vrai.",
      infosucces:
        "C'est vrai ! Une phrase commence toujours par une grande lettre (majuscule).",
      type: "booleen",
    },
    {
      id: 3,
      title: "Phrases simples",
      question: "Complète : 'Papa ... la voiture.' Que fait papa ?",
      result: ["conduit"],
      infoErro: "Une bonne réponse était : conduit (ou répare, lave...).",
      infosucces: "Très bien ! Papa conduit la voiture 🚗.",
      type: "choix",
      option: ["mange", "conduit", "dort", "chante", "court"],
    },
    {
      id: 4,
      title: "Phrases simples",
      question:
        "Écris ce qui manque dans cette phrase : 'Maman ... un gâteau.'",
      result: ["fait"],
      infoErro: "Une bonne réponse était : fait (ou prépare, cuisine...).",
      infosucces: "Parfait ! Maman fait un gâteau 🍰.",
      type: "input",
    },
    {
      id: 5,
      title: "Phrases simples",
      question: "Dans 'Le soleil brille.', que fait le soleil ?",
      result: ["il brille"],
      infoErro: "La bonne réponse était : il brille.",
      infosucces: "Excellent ! Le soleil brille dans le ciel ☀️.",
      type: "choix",
      option: ["il dort", "il brille", "il mange", "il court", "il chante"],
    },
    // {
    //   id: 6,
    //   title: "Phrases simples",
    //   question: "Une phrase se termine toujours par un point",
    //   result: ["vrai"],
    //   infoErro: "La bonne réponse était : vrai.",
    //   infosucces:
    //     "C'est vrai ! Une phrase se termine par un point (.) ou ! ou ?",
    //   type: "booleen",
    // },
    // {
    //   id: 7,
    //   title: "Phrases simples",
    //   question: "Lis : 'L'oiseau vole.' Où est l'oiseau ?",
    //   result: ["dans le ciel"],
    //   infoErro: "La bonne réponse était : dans le ciel.",
    //   infosucces: "Bravo ! L'oiseau vole dans le ciel 🐦.",
    //   type: "choix",
    //   option: [
    //     "dans l'eau",
    //     "dans le ciel",
    //     "sous terre",
    //     "dans la maison",
    //     "dans l'arbre",
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Phrases simples",
    //   question: "Écris le mot qui manque : 'Le chien ... dans le jardin.'",
    //   result: ["joue"],
    //   infoErro: "Une bonne réponse était : joue (ou court, dort...).",
    //   infosucces: "Super ! Le chien joue dans le jardin 🐕.",
    //   type: "input",
    // },
    // {
    //   id: 9,
    //   title: "Phrases simples",
    //   question: "Dans 'Marie lit un livre.', qui lit ?",
    //   result: ["Marie"],
    //   infoErro: "La bonne réponse était : Marie.",
    //   infosucces: "Parfait ! C'est Marie qui lit un livre 📚.",
    //   type: "choix",
    //   option: ["Paul", "Marie", "Léa", "Tom", "Julie"],
    // },
    // {
    //   id: 10,
    //   title: "Phrases simples",
    //   question: "Écris une phrase avec les mots : chat - dort",
    //   result: ["Le chat dort"],
    //   infoErro: "Tu devais faire une phrase avec 'chat' et 'dort'.",
    //   infosucces:
    //     "Très bien ! Tu as écrit une belle phrase avec le chat qui dort 😴.",
    //   type: "input",
    // },
  ],
};
export default CP1exercice5;
