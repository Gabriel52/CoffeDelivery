import React, { useEffect } from 'react';
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
import { CITY_LOCATION, IS_EMPTY, PERMISSION_ENABLED_LOCATION } from '../../configuration/const';
import { COLORS } from '../../configuration/colors';
import { useProducts } from '../../Provider';
import { Skeleton } from '../Skeleton';


export const Navbar = ():JSX.Element => {
    const { amountProducts, userLocation, loadingSearchLocation } = useProducts()
    
    return (
        <NavbarStyled>
            <img src={LogoImage} alt="Logo" />

            <ActionsStyled>
                {loadingSearchLocation ? (
                    <Skeleton width='180px' height='42px'/>
                ):(
                    <>
                        <TagLocationStyled>
                                <MdLocationPin color={COLORS.purple_dark}/>
                                {userLocation?.state}
                        </TagLocationStyled>
                        <TagCartStyled>
                            <FaCartArrowDown color={COLORS.yellow_dark} />
                        </TagCartStyled>
                        {amountProducts > IS_EMPTY && (
                            <NumberCartStyled>
                                {amountProducts}
                            </NumberCartStyled>
                        )}
                    </>

                )}
            </ActionsStyled>
        </NavbarStyled>
    )
}