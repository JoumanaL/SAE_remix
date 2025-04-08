import React from 'react';
import Hero from '../components/Hero'; // Assure-toi d'importer le composant Hero correctement
import '../styles/Adherer.css';
import FicheAdhesionPDF from "/assets/fiche_adhesion.pdf";
const adhererImg = "/assets/img/img-adherer.png";
const heroImage = "/assets/img/drapeau_italie.jpg";

const Adherer = () => {
    const title = "Adhérer à notre association";
    const description = "Bienvenue sur notre page d'adhésion. Découvrez les avantages de devenir membre de notre association.";
    const buttonText = "Commencer";

const handleScrollToContent = () => {};

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className="adherer-container">
            <Hero
                title={title}
                description={description}
                buttonText={buttonText}
                heroImage= {heroImage}
                scrollTo={handleScrollToContent}
            />

            <div className="adherer-content1">
                
                <img src={adhererImg} alt="Adherer Image" className="adherer-image" />

                <div className="txt-content">
                    <h2 className='h2'>Pourquoi adhérer ?</h2>
                    <h3 className='h3'>Adhérer à l'A.P.I.R.P. vous permet de :</h3>
                    <ol className='custom-ol ol'>
                            <li >Participer activement aux assemblées générales.</li>
                            <li>Recevoir chaque année le bulletin imprimé de l’association et des plaquettes gratuites pour la promotion de l’italien.</li>
                            <li>
                                Soutenir des initiatives visant à promouvoir l’enseignement de l’italien en île-de-France, telles que :
                                <ul className='ul'>
                                    <li>- La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;</li>
                                    <li>- La création et l’impression de plaquettes pour la promotion de l’italien ;</li>
                                    <li>- Notre participation à des manifestations et des événements culturels tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc.</li>
                                </ul>
                            </li>
                            <li>Connaître le réseau des professeurs d’italien de la Région Parisienne.</li>
                            <li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li>
                            <li>Bénéficier de l'union qui fait la force ; l'A.P.I.R.P. est un moyen de ne pas rester isolé et de favoriser des échanges actifs sur notre métier.</li>
                    </ol>
                </div>
            </div>

            <div className="adherer-content2">
                <h2 className='h2'>Qui peut adhérer à l’association ?</h2>
                <p className='p'>Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.</p>
                <h3>Comment y adhérer ?</h3>
                <p className='p'>Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.</p>

                <button className="button" onClick={() => window.open(FicheAdhesionPDF, '_blank')}>Télécharger la fiche d'adhésion</button>
                



                
                <form className="formulaire-adhesion" onSubmit={(e) => e.preventDefault()}>
  <div className="form-row">
    <label className="p">Nom :</label>
    <input type="text" name="nom" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Prénom :</label>
    <input type="text" name="prenom" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Adresse :</label>
    <input type="text" name="adresse" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Code postal :</label>
    <input type="text" name="code_postal" className="input input-small" required />
  </div>

  <div className="form-row">
    <label className="p">Ville :</label>
    <input type="text" name="ville" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Adresse e-mail :</label>
    <input type="email" name="email" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Téléphone :</label>
    <input type="tel" name="telephone" className="input" required />
  </div>

  <div className="form-row">
    <label className="p">Fonction / Établissement :</label>
    <input type="text" name="fonction" className="input" />
  </div>





{/* Paiement PayPal */}

  {/* Bouton PayPal à personnaliser */}
  {/* 
    Pour obtenir le vôtre :
      1. Créez un compte PayPal Business
      2. Allez dans "Outils" > "Créer un bouton de paiement"
      3. Choisissez "Don", entrez le nom, montant, etc.
      4. Copiez le code HTML généré et remplacez le bloc ci-dessous
  */}

<div className="paypal-section">
  <h3 className="h3">Paiement de la cotisation</h3>
  <p className="p">Cliquez sur le bouton ci-dessous pour payer votre cotisation en ligne :</p>

  {/* Remplace ce lien par TON lien PayPal */}
  <a
    href="https://www.paypal.com/donate?hosted_button_id=TON_ID_PAYPAL"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
      alt="Pay with PayPal"
    />
  </a>
</div>
<button type="submit" className="button">Envoyer</button>
</form>
            </div>      
            
        </div>

    );
}

export default Adherer;