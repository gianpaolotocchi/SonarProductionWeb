import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const VerticalContainer = styled.div`
position: absolute;
right: 0;
height: 95vh;
width: 250px;
background-color: red;
z-index: 2;
padding: 0em 2em;
`;

const ContainerLink = styled.div`
display: block;
background-color: white;
align-items: center;
text-align: center;
width: 100%;
height: 100%;
`;

const Drawer = () => {
    return(
        <VerticalContainer>
            <ContainerLink>
                <div>
                <NavLink to="/">Homepage</NavLink>
                </div>
                <NavLink to="/contatti">Contatti</NavLink>
            </ContainerLink>
        </VerticalContainer>
    )
}

export default Drawer;