import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

import { 
    ActionsStyled, 
    NavbarStyled, 
    TagCartStyled, 
    TagLocationStyled 
} from "./styled"

import LogoImage from '../../assets/logo.svg'
import { CITY_LOCATION } from '../../configuration/const';
import { COLORS } from '../../colors';


export const Navbar = ():JSX.Element => {
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
            </ActionsStyled>
        </NavbarStyled>
    )
}