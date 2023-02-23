import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

import { 
    ActionsStyled, 
    NavbarStyled, 
    NumberCartStyled, 
    TagCartStyled, 
    TagLocationStyled 
} from "./styled"

import LogoImage from '../../assets/logo.svg'
import { CITY_LOCATION, IS_EMPTY } from '../../configuration/const';
import { COLORS } from '../../configuration/colors';
import { useProducts } from '../../Provider';


export const Navbar = ():JSX.Element => {
    const { amountProducts } = useProducts()
    return (
        <NavbarStyled>
            <img src={LogoImage} alt="Logo" />
            <ActionsStyled>
                <TagLocationStyled>
                        <MdLocationPin color={COLORS.purple_dark}/>
                        {CITY_LOCATION}
                </TagLocationStyled>
                <TagCartStyled>
                    <FaCartArrowDown color={COLORS.yellow_dark}/>
                </TagCartStyled>
                {amountProducts > IS_EMPTY && (
                    <NumberCartStyled>
                        {amountProducts}
                    </NumberCartStyled>
                )}
            </ActionsStyled>
        </NavbarStyled>
    )
}