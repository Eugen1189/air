// src/data/mock-posts.js

// This is an array of objects that mimics data from CMS
export const mockPosts = [
  {
    id: 1,
    title: 'Costa Smeralda d\'Italia: Il Viaggio dei Tuoi Sogni',
    slug: 'viaggio-dei-tuoi-sogni-italia',
    coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    excerpt: 'Scopri la Costiera Amalfitana, dove le montagne incontrano il mare e ogni borgo è una vera perla.',
    publishDate: '2025-10-15',
    category: 'Destinazioni',
    readTime: '8 min',
    content: `
      <p>La Costiera Amalfitana non è solo un luogo, è un'emozione. Sono 50 chilometri di costa dove storia, cultura e natura si intrecciano in un tutt'uno.</p>
      <h3>Cosa vedere?</h3>
      <ul>
        <li><strong>Positano:</strong> Casette a cascata che scendono verso il mare.</li>
        <li><strong>Amalfi:</strong> Maestoso duomo e giardini di limoni.</li>
        <li><strong>Ravello:</strong> Ville con viste panoramiche mozzafiato.</li>
      </ul>
      <h3>Quando andare?</h3>
      <p>Il periodo migliore è da aprile a ottobre, quando il clima è mite e le giornate sono soleggiate. Evita agosto se non ami la folla.</p>
      <h3>Consigli pratici</h3>
      <p>Prenota gli alloggi in anticipo, noleggia uno scooter per esplorare liberamente, e assaggia il limoncello locale in ogni borgo.</p>
    `
  },
  {
    id: 2,
    title: 'Magia dei Fiordi Norvegesi: Consigli per Viaggiatori',
    slug: 'magia-fiordi-norvegesi',
    coverImage: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076',
    excerpt: 'Come prepararsi per un viaggio in uno dei luoghi più pittoreschi del pianeta? I nostri consigli ti aiuteranno.',
    publishDate: '2025-09-28',
    category: 'Destinazioni',
    readTime: '7 min',
    content: `
      <p>Un viaggio in Norvegia è un'immersione nel mondo dei maestosi fiordi e della natura incredibile.</p>
      <h3>I fiordi più belli</h3>
      <ul>
        <li><strong>Geirangerfjord:</strong> Patrimonio UNESCO con cascate spettacolari.</li>
        <li><strong>Nærøyfjord:</strong> Il fiordo più stretto e drammatico.</li>
        <li><strong>Sognefjord:</strong> Il più lungo e profondo fiordo della Norvegia.</li>
      </ul>
      <h3>Come muoversi?</h3>
      <p>Noleggia un'auto per la libertà totale, oppure usa i traghetti panoramici che collegano i fiordi. Il treno Bergen-Oslo offre viste spettacolari.</p>
      <h3>Budget</h3>
      <p>La Norvegia è costosa. Prevedi almeno 150-200€ al giorno. Risparmia preparando picnic con prodotti dai supermercati.</p>
    `
  },
  {
    id: 3,
    title: '10 Consigli per Viaggiare in Modo Sostenibile',
    slug: 'viaggiare-sostenibile',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070',
    excerpt: 'Scopri come ridurre l\'impatto ambientale dei tuoi viaggi senza rinunciare all\'avventura.',
    publishDate: '2025-01-15',
    category: 'Sostenibilità',
    readTime: '5 min',
    content: `
      <p>Viaggiare in modo sostenibile non significa rinunciare al divertimento, ma essere consapevoli dell'impatto che abbiamo sul pianeta.</p>
      <h3>10 consigli pratici:</h3>
      <ol>
        <li>Scegli trasporti pubblici o treni invece di voli quando possibile</li>
        <li>Porta una borraccia riutilizzabile per ridurre la plastica</li>
        <li>Soggiorna in strutture eco-certificate</li>
        <li>Rispetta la fauna locale e non disturbare gli animali</li>
        <li>Compra prodotti locali e supporta l'economia del luogo</li>
        <li>Evita le ore di punta nelle destinazioni turistiche</li>
        <li>Usa sacchetti di stoffa per la spesa</li>
        <li>Preferisci docce brevi per risparmiare acqua</li>
        <li>Partecipa a tour eco-friendly con guide locali</li>
        <li>Lascia i luoghi meglio di come li hai trovati - raccogli i rifiuti</li>
      </ol>
    `
  },
  {
    id: 4,
    title: 'Street Food nel Mondo: Una Guida Completa',
    slug: 'street-food-mondo',
    coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070',
    excerpt: 'Dal pad thai di Bangkok ai tacos di Città del Messico. I migliori piatti di strada da provare.',
    publishDate: '2024-12-28',
    category: 'Gastronomia',
    readTime: '10 min',
    content: `
      <p>Lo street food è l'anima culinaria di una città. Ecco dove trovare i migliori piatti di strada del mondo.</p>
      <h3>Asia</h3>
      <ul>
        <li><strong>Bangkok:</strong> Pad Thai, Som Tam, Mango Sticky Rice</li>
        <li><strong>Tokyo:</strong> Takoyaki, Okonomiyaki, Yakitori</li>
        <li><strong>Mumbai:</strong> Vada Pav, Pani Puri, Bhel Puri</li>
      </ul>
      <h3>Europa</h3>
      <ul>
        <li><strong>Istanbul:</strong> Simit, Döner, Balik Ekmek</li>
        <li><strong>Berlino:</strong> Currywurst, Döner Kebab</li>
        <li><strong>Palermo:</strong> Arancini, Panelle, Sfincione</li>
      </ul>
      <h3>Consigli di sicurezza</h3>
      <p>Scegli bancarelle affollate di locali, guarda come viene preparato il cibo, evita carne cruda in paesi caldi.</p>
    `
  },
  {
    id: 5,
    title: 'Come Fotografare i Tuoi Viaggi come un Professionista',
    slug: 'fotografare-viaggi',
    coverImage: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2070',
    excerpt: 'Tecniche e trucchi per catturare momenti indimenticabili durante i tuoi viaggi.',
    publishDate: '2025-01-05',
    category: 'Fotografia',
    readTime: '6 min',
    content: `
      <p>Foto di viaggio memorabili non richiedono attrezzatura costosa, ma occhio attento e conoscenza di alcune tecniche base.</p>
      <h3>Regole di composizione</h3>
      <ul>
        <li><strong>Regola dei terzi:</strong> Dividi l'immagine in 9 parti e posiziona il soggetto sui punti di intersezione</li>
        <li><strong>Leading lines:</strong> Usa strade, fiumi, muri per guidare l'occhio verso il soggetto</li>
        <li><strong>Cornici naturali:</strong> Archi, finestre, alberi creano profondità</li>
      </ul>
      <h3>Luce perfetta</h3>
      <p>Golden hour (un'ora dopo l'alba e prima del tramonto) offre la luce più bella. Evita il sole di mezzogiorno.</p>
      <h3>Editing</h3>
      <p>Usa Lightroom Mobile o Snapseed per migliorare colori e contrasto. Non esagerare con i filtri!</p>
    `
  },
  {
    id: 6,
    title: 'Budget Travel: Come Viaggiare con Poco',
    slug: 'viaggiare-budget',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070',
    excerpt: 'Consigli pratici per esplorare il mondo senza svuotare il portafoglio.',
    publishDate: '2024-12-20',
    category: 'Budget',
    readTime: '7 min',
    content: `
      <p>Viaggiare con budget limitato è possibile se sai dove cercare offerte e come risparmiare.</p>
      <h3>Voli economici</h3>
      <ul>
        <li>Usa Skyscanner e Google Flights per confrontare prezzi</li>
        <li>Vola nei giorni infrasettimanali (martedì e mercoledì)</li>
        <li>Prenota 2-3 mesi in anticipo per voli internazionali</li>
        <li>Considera aeroporti secondari</li>
      </ul>
      <h3>Alloggi</h3>
      <p>Ostelli, Airbnb, Couchsurfing. Considera anche scambi casa su HomeExchange.</p>
      <h3>Mangiare</h3>
      <p>Mercati locali, street food, self-catering. Pranzo abbondante e cena leggera (spesso più economica).</p>
    `
  },
  {
    id: 7,
    title: 'Cosa Mettere in Valigia: La Lista Definitiva',
    slug: 'lista-valigia',
    coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070',
    excerpt: 'Essenziali per ogni tipo di viaggio. Come ottimizzare lo spazio e non dimenticare nulla.',
    publishDate: '2024-12-15',
    category: 'Consigli',
    readTime: '4 min',
    content: `
      <p>Fare la valigia è un'arte. Ecco la lista definitiva per non dimenticare nulla.</p>
      <h3>Documenti essenziali</h3>
      <ul>
        <li>Passaporto (valido 6 mesi)</li>
        <li>Assicurazione viaggio stampata</li>
        <li>Carte di credito/debito (almeno 2)</li>
        <li>Fototessere di scorta</li>
      </ul>
      <h3>Tech essentials</h3>
      <ul>
        <li>Power bank</li>
        <li>Adattatore universale</li>
        <li>Cavi e caricatori</li>
      </ul>
      <h3>Trucchi per risparmiare spazio</h3>
      <p>Arrotola i vestiti invece di piegarli, usa cubi organizzatori, indossa gli abiti più pesanti durante il volo.</p>
    `
  },
  {
    id: 8,
    title: 'Le Migliori Destinazioni per il 2025',
    slug: 'destinazioni-2025',
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070',
    excerpt: 'Tendenze di viaggio e destinazioni emergenti che non puoi perdere quest\'anno.',
    publishDate: '2025-01-10',
    category: 'Destinazioni',
    readTime: '8 min',
    content: `
      <p>Il 2025 porta nuove tendenze nei viaggi. Ecco le destinazioni da non perdere.</p>
      <h3>Destinazioni emergenti</h3>
      <ul>
        <li><strong>Albania:</strong> La nuova Grecia con prezzi accessibili</li>
        <li><strong>Georgia:</strong> Vini eccellenti e montagne del Caucaso</li>
        <li><strong>Oman:</strong> L'Arabia autentica e sicura</li>
        <li><strong>Slovenia:</strong> Natura incontaminata nel cuore d'Europa</li>
      </ul>
      <h3>Trend 2025</h3>
      <p>Turismo sostenibile, viaggi slow, destinazioni off-the-beaten-path, workation in luoghi esotici.</p>
      <h3>Dove prenotare ora</h3>
      <p>Se vuoi visitare Giappone (sakura), Grecia (estate) o Islanda (aurora), prenota subito - i prezzi salgono!</p>
    `
  }
];

