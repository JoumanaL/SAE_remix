import React from 'react';
import '../style/Accueil.css';
import TabImg from './TabImg';
import Actualite from './Actualite'; // Composant d'actualité
import image from '../img/drapeau_italie2.jpg'; // Cette image peut rester en import si elle est dans app/img



const Accueil = () => {
  return (
    <div className="accueil-container">

      <div className="hero">
        {/* <img className="background-image" src="/img/italie_paris.jpg" alt="Background" /> */}
        <div className="hero-content">
          {/* Texte ou logo ici si besoin */}
        </div>
      </div>

      <div className="accueil-container1">
        <h1 className="h1">Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne</h1>

        <TabImg
          imageUrl={image}
          imageAlt="Drapeau italien"
          title="Notre association a pour vocation :"
          description={
            <ul>
              <li><span className='span'>- d’établir et développer</span> des liens de solidarité et d’amitié entre les italianistes de la région parisienne;</li>
              <li><span className='span'>- de renseigner</span> les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
              <li><span className='span'>- de promouvoir</span> l’enseignement de l’italien.</li>
            </ul>
          }
        />
      </div>

      <img className="img" src="/img/Italie_icon.png" alt="Icône Italie" />

      <div className="accueil-container1">
        <h2 className="txt2">Exploration culturelle : Plongée au cœur de l'Italie avec l'Association des Professeurs d'Italien de la Région Parisienne</h2>
        <p className="txt">
          Nous sommes également des défenseurs de la diversité linguistique et culturelle. En promouvant 
          l'enseignement de l'italien, nous contribuons à l'enrichissement de la palette linguistique de 
          la région parisienne...
        </p>
      </div>

      <div className="accueil-container2">
        <h2 className="txt3 h2">actualités</h2>
        <p className='p'>... DAL WEB</p>

        <div className="actualite-container">
          <div className="actualite-box">
            <Actualite
              image="/img/DivinaComedia.jpg"
              title="La Divina Commedia"
              description="Con tutto si può giocare, anche con Dante Alighieri..."
              url="https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/zerocalcare.jpg"
              title="Zerocalcare sur Netflix"
              description="L'arrivo della serie animata di Zerocalcare su Netflix..."
              url="https://youtu.be/c0p3iwtw9tU"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/greenPea.jpg"
              title="Green Pea apre a Torino l’8 dicembre"
              description="L’attesissimo centre commercial éco-responsable..."
              url="https://www.gamberorosso.it/notizie/green-pea-apre-a-torino-l8-dicembre-ecco-cose-la-scommessa-ecologica-di-farinetti/"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/sergio.jpg"
              title="Sergio Mattarella: «Dante, notre contemporain»"
              description="La musique pour rendre hommage au Sommo poeta..."
              url="https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/dal.jpg"
              title="Dal 2021 riapre le Corridoio Vasarian"
              description="Une gemme du patrimoine artistique italien rouvre enfin..."
              url="https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/raffaelloSuperstar.jpg"
              title="Raffaello superstar à Rome"
              description="La plus grande exposition jamais dédiée à Raffaello..."
              url="https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/lupi.jpg"
              title="I lupi di Liu Ruowang à Naples"
              description="Cento lupi en métal assiègent la place Municipio..."
              url="http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3"
            />
          </div>

          <div className="actualite-box">
            <Actualite
              image="/img/portata.jpg"
              title="Une villa romaine révélée à Enna"
              description="Les fouilles ont mis au jour une autre villa impressionnante..."
              url="http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
