export default function handler(req, res) {
  // 1. Lista de links para redirecionamento (substitua pelos seus URLs)
  const links = [
    "https://www.youtube.com/@canalcanalha" + Date.now(), // Adiciona timestamp para evitar cache
    "https://www.youtube.com/@Rodrigo_Goes" + Date.now()
  ];

  // 2. Cabeçalhos ANTI-CACHE (cruciais para o Facebook/Vercel)
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Vary', '*');
  res.setHeader('CDN-Cache-Control', 'no-store');

  // 3. Seleção aleatória IMPERVIAVEL
  const randomIndex = Math.floor(Math.random() * links.length);
  const selectedLink = links[randomIndex];

  // 4. Redirecionamento 307 (temporary redirect)
  console.log(`Redirecionando para: ${selectedLink}`); // Log para debug
  res.redirect(307, selectedLink);
}
