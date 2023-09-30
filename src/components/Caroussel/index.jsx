import styled from "styled-components";

import tenis1 from './assets/Tenis1.png';
import tenis2 from './assets/Tenis2.png';
import tenis3 from './assets/Tenis3.png';
import { useState } from "react";

const Caroussel = () => {

    const [itemAtivo, setItemAtivo] = useState(0);

    const banners = [
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'Queima de estoque Nike',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis1
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'Leve o seu agora',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis2
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'O mais melhor de todos',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis3
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'O mais melhor de todos',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis3
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'O mais melhor de todos',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis3
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'O mais melhor de todos',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis3
        },
        {
            suptitle: 'Melhores ofertas personalizadas',
            title: 'O mais melhor de todos',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            buttonText: 'Ver Ofertas',
            imagem: tenis3
        },
    ];

    return (
        <>
            <CarousselContainer>
                <CarousselItems $ativo={itemAtivo} $items={banners.length}>
                    {
                        banners.map((banner, index) => (
                            <CarousselItem key={index}>
                                <CarousselContent>
                                    <CarousselSupTitle>
                                        {banner.suptitle}
                                    </CarousselSupTitle>
                                    <CarousselTitle>
                                        {banner.title}
                                    </CarousselTitle>
                                    <CarousselDescription>
                                        {banner.description}
                                    </CarousselDescription>
                                    <CarousselButton>
                                        {banner.buttonText}
                                    </CarousselButton>
                                </CarousselContent>
                                <CarousselImage src={banner.imagem} />
                            </CarousselItem>
                        ))
                    }
                </CarousselItems>
                <CarousselPagination>
                    {
                        banners.map((banner, index) => (
                            <CarousselPaginationPill
                                key={index}
                                className={ itemAtivo === index ? "active" : ""}
                                onClick={() => setItemAtivo(index)}
                            />
                        ))
                    }
                </CarousselPagination>
            </CarousselContainer>
        </>
    );
};

const CarousselContainer = styled.div`
    --yellow: #F6AA1C;
    --dark-gray: #1F1F1F;
    --dark-gray-2: #474747;
    --light-gray: #F5F5F5;
    --light-gray-2: #CCCCCC;
    --pink: #C92071;
    --pink-hover: #991956;
    --letter-spacing: .75px;
    
    position: relative;
    background-color: var(--light-gray);
    padding: 80px 0;
    overflow: hidden;
`;

const CarousselItems = styled.div`
    display: flex;
    width: calc(100vw * ${(props) => props.$items || 1});
    position: relative;
    left: calc(-100vw * ${(props) => props.$ativo || 0});
    transition-duration: 300ms;
`;

const CarousselItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0 100px;
    width: 100vw;
`;

const CarousselContent = styled.div`
    width: 45%;
`;

const CarousselSupTitle = styled.h6`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: var(--letter-spacing);
    color: var(--yellow);
`;

const CarousselTitle = styled.h2`
    font-weight: 800;
    font-size: 64px;
    line-height: 66px;
    letter-spacing: 1px;
    color: var(--dark-gray);
    margin: 20px 0;
`;

const CarousselDescription = styled.p`
    font-size: 18px;
    line-height: 34px;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-gray-2);
    margin-bottom: 40px;
`;

const CarousselButton = styled.button`
    width: 220px;
    height: 48px;
    background-color: var(--pink);
    border-radius: 5px;
    color: var(--light-gray);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: var(--letter-spacing);
    transition-duration: 200ms;
    cursor: pointer;

    &:hover{
        background-color: var(--pink-hover);
    }
`;

const CarousselImage = styled.img`
    transform: rotate(-10deg);
    flex: 1;
    object-fit: none;
`;

const CarousselPagination = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;

const CarousselPaginationPill = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--light-gray-2);
    transition-duration: 200ms;
    cursor: pointer;
    
    &.active{
        background-color: var(--pink);
    }
`;

export default Caroussel;