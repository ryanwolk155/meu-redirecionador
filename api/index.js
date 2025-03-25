export default function handler(req, res) {
  const links = [
    "https://www.youtube.com/@canalcanalha", // SUBSTITUA pelo seu 1º link
    "https://www.youtube.com/@Rodrigo_Goes"  // SUBSTITUA pelo seu 2º link
  ];
  
  // Escolhe aleatoriamente (50% para cada)
  const randomLink = links[Math.floor(Math.random() * links.length)];
  res.redirect(307, randomLink);
}
