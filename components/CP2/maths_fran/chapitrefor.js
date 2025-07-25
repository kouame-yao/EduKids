const chapitre4_CP2 = {
  Mathématique: [
    {
      id: 1,
      title: "Identifier un nombre impair",
      question: "Le nombre 7 est-il impair ?",
      result: ["vrai"],
      infoErro: "La bonne réponse était : vrai.",
      infosucces: "Oui, 7 est un nombre impair.",
      type: "booleen",
    },
    {
      id: 2,
      title: "Additions et dizaines",
      question: "Combien font 10 + 5 ?",
      result: ["15"],
      infoErro: "La bonne réponse était : 15.",
      infosucces: "10 + 5 = 15. Bien joué !",
      type: "choix",
      option: ["14", "16", "15", "13", "12"],
    },
    {
      id: 3,
      title: "Soustraction avec dizaines",
      question: "Combien font 20 - 8 ?",
      result: ["12"],
      infoErro: "La bonne réponse était : 12.",
      infosucces: "20 - 8 = 12. Très bien !",
      type: "input",
    },
    {
      id: 4,
      title: "Comparaison complexe",
      question: "Est-ce que 15 est plus petit que 12 ?",
      result: ["faux"],
      infoErro: "La bonne réponse était : faux.",
      infosucces: "Non, 15 est plus grand que 12.",
      type: "booleen",
    },
    {
      id: 5,
      title: "Petit problème",
      question: "Tom a 6 billes, il en perd 2. Combien lui en reste-t-il ?",
      result: ["4"],
      infoErro: "La bonne réponse était : 4.",
      infosucces: "6 - 2 = 4. Tu as trouvé !",
      type: "choix",
      option: ["4", "5", "6", "3", "7"],
    },
  ],
  Français: [
    {
      id: 1,
      title: "Trouver la bonne lettre",
      question: "Quelle lettre complète : _our ?",
      result: ["j"],
      infoErro: "La bonne réponse était : j.",
      infosucces: "Jour s’écrit avec un j au début.",
      type: "input",
    },
    {
      id: 2,
      title: "Vrai ou faux ?",
      question: "Le mot 'sac' commence par une consonne.",
      result: ["vrai"],
      infoErro: "La bonne réponse était : vrai.",
      infosucces: "Oui, 's' est une consonne.",
      type: "booleen",
    },
    {
      id: 3,
      title: "Compléter une phrase",
      question: "Choisis le mot qui complète : Le garçon ... un ballon.",
      result: ["a"],
      infoErro: "La bonne réponse était : a.",
      infosucces: "Le garçon a un ballon. Bien vu !",
      type: "choix",
      option: ["est", "va", "a", "fait", "joue"],
    },
    {
      id: 4,
      title: "Orthographe visuelle",
      question: "Écris le mot : papillon",
      result: ["papillon"],
      infoErro: "La bonne réponse était : papillon.",
      infosucces: "Bravo, papillon s’écrit ainsi.",
      type: "input",
    },
    {
      id: 5,
      title: "Phrase logique ?",
      question: "Le poisson vole dans l’arbre. Est-ce logique ?",
      result: ["faux"],
      infoErro: "La bonne réponse était : faux.",
      infosucces: "Non, un poisson ne vole pas dans un arbre !",
      type: "booleen",
    },
  ],
};
export default chapitre4_CP2;
