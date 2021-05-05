import Card from '../components/Card/index';
import LogoFull from '../components/assets/Logo_trans_full.png';
import Button from '../components/button';

import { HomeWrapper,
        Logo,   
         HeroWrapper,
         H1Hero,
         PHero,
         InfoWrapper,
         InfoTextWrapper,
         H1Info,
         PInfo,
         ImgInfoWrapper
        } from './layouts/indexlayout';
import { CardWrapper } from '../components/Card/CardElements';
import Footer from '../components/Footer';
function HomePage() {

    return(
        <HomeWrapper>
            {/* HERO */}
            <HeroWrapper>
                <Logo src={LogoFull}></Logo > 
                <H1Hero>Tu app de recetas</H1Hero>
                <PHero>Comer bien en casa, nunca fue tan sencillo</PHero>
                <Button>Date de alta hoy!</Button>
            </HeroWrapper>

            {/* INFO + FOTO */}
            <InfoWrapper>
                <InfoTextWrapper>
                    <H1Info>Cocina barato, saludable y rápido hoy mismo</H1Info>
                    <PInfo> La herramienta definitva para organizar tus comidas y compras semana a semana. No comas mal por falta de organización y tiempo.</PInfo>
                </InfoTextWrapper>
                <ImgInfoWrapper></ImgInfoWrapper>
            </InfoWrapper>

            {/* CARDS */}
            <Card />
        </HomeWrapper>
    )
};

export default HomePage;