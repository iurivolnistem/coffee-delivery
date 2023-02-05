import logo from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react';

import { ActionsContainer, HeaderContainer } from './styles';

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            <ActionsContainer>
                <div className="location">
                    <MapPin size={22} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>
                <div className="cartBadge">
                    <ShoppingCart size={22} weight="fill" />
                </div>
            </ActionsContainer>
        </HeaderContainer>
    );
}