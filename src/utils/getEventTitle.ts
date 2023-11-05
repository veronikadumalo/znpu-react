export const getEventTitle = (eventType: string) => {
  switch (eventType) {
    case "course":
      return "Kursy";
    case "conference":
      return "Konferencje";
    case "dictation":
      return "Dyktando";
    case "seminar":
      return "Seminaria";
    case "olympiad":
      return "Olimpiady";
  }
};
