// src/components/ImportantInfo.jsx
import React from 'react';
import './ImportantInfo.scss'; // Connect styles

const ImportantInfo = () => {
  return (
    <section className="important-info-section">
      <h2 className="section-title">Informazioni Importanti</h2>
      <p className="section-subtitle">
        Ci impegniamo affinché il tuo viaggio sia impeccabile dall'inizio alla fine. Per favore, leggi queste informazioni per prepararti al meglio al viaggio.
      </p>

      <div className="info-block">
        <h4>✅ Cosa portare con te?</h4>
        <p>Consigliamo di viaggiare con una valigia piccola per rendere gli spostamenti più comodi. Ecco un elenco approssimativo delle cose:</p>
        <ul>
          <li><strong>Scarpe:</strong> Assicurati di portare un paio di scarpe comode e già indossate (sneaker, mocassini, espadrillas) per lunghe passeggiate.</li>
          <li><strong>Abbigliamento:</strong> Abiti leggeri in tessuti naturali che proteggono dal sole. Vale la pena portare una giacca leggera o una felpa calda per le serate.</li>
          <li><strong>Essenziali:</strong> Occhiali da sole, copricapo, crema solare ad alto SPF.</li>
          <li><strong>Elettronica:</strong> Fotocamera, power bank portatile.</li>
          <li><strong>Eco-consapevolezza:</strong> Consigliamo di portare la propria bottiglia d'acqua per ridurre l'uso della plastica.</li>
        </ul>
      </div>

      <div className="info-block">
        <h4>✅ Documenti e Denaro</h4>
        <ul>
            <li><strong>Passaporto:</strong> Avrai bisogno di un passaporto biometrico valido per almeno 6 mesi dopo la data di fine del tour.</li>
            <li><strong>Assicurazione:</strong> L'assicurazione medica di viaggio è obbligatoria. Possiamo aiutarti con la sua registrazione.</li>
            <li><strong>Denaro:</strong> La valuta ufficiale è l'euro (€). Per piccoli negozi, mercati e mance consigliamo di avere una piccola quantità di contanti.</li>
        </ul>
      </div>
      
      <div className="info-block">
        <h4>✅ Livello di Attività Fisica: Confortevole</h4>
        <p>Questo tour non richiede una preparazione fisica speciale. Include passeggiate giornaliere per le città a ritmo tranquillo (fino a 5-10 km al giorno).</p>
      </div>

      <div className="info-block">
        <h4>✅ Condizioni di Pagamento e Cancellazione</h4>
        <ul>
            <li><strong>Conferma:</strong> Il tuo posto nel gruppo è considerato prenotato dopo il pagamento di un acconto del 30%.</li>
            <li><strong>Pagamento completo:</strong> Il resto dell'importo deve essere pagato entro e non oltre 30 giorni prima dell'inizio del tour.</li>
            <li><strong>Cancellazione:</strong> La cancellazione gratuita è possibile 45 giorni prima della data di partenza. Le condizioni dettagliate saranno specificate nel tuo contratto.</li>
        </ul>
      </div>

      <div className="info-block">
        <h4>✅ Contatto con la Guida e il Gruppo</h4>
        <p>Una settimana prima del viaggio creeremo una chat comune su Telegram (o WhatsApp) per l'intero gruppo, dove potrai conoscere gli altri partecipanti e la tua guida.</p>
      </div>
    </section>
  );
};

export default ImportantInfo;

