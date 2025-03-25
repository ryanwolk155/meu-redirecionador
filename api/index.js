export default function handler(req, res) {
  const links = [
    "https://exemplo.com/link1", // SUBSTITUA pelo seu 1º link
    "https://exemplo.com/link2"  // SUBSTITUA pelo seu 2º link
  ];
  
  // Escolhe aleatoriamente (50% para cada)
  const randomLink = links[Math.floor(Math.random() * links.length)];
  res.redirect(307, randomLink);
}
