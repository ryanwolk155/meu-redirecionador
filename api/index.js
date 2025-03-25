// api/index.js
export default function handler(req, res) {
  const links = [
    "https://www.youtube.com/@Rodrigo_Goes" + Math.random().toString(36).substring(7),
    "https://www.youtube.com/@canalcanalha" + Math.random().toString(36).substring(7)
  ];
  
  // Força não-cache (CRUCIAL)
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Vary', '*');
  
  // Seleção verdadeiramente aleatória
  const selected = links[Date.now() % links.length];
  res.redirect(307, selected);
}
