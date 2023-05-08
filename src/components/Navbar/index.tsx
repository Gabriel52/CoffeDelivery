
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
import { IS_EMPTY } from '../../configuration/const';
import { COLORS } from '../../configuration/colors';
import { useProducts } from '../../Provider';
import { Skeleton } from '../Skeleton';


export const Navbar = ():JSX.Element => {
    const { amountProducts, userLocation, loadingSearchLocation } = useProducts()
    return (
        <NavbarStyled>
            <a href="/">
                <img src={LogoImage} alt="Logo" />
            </a>

            <ActionsStyled>
                {loadingSearchLocation ? (
                    <Skeleton width='180px' height='42px'/>
                ):(
                    <>
                        <TagLocationStyled>
                            <MdLocationPin color={COLORS.purple_dark}/>
                            {userLocation ? userLocation.state : 'Sem localização'}
                        </TagLocationStyled>
                        <a href="/checkout">
                            <TagCartStyled>
                                <FaCartArrowDown color={COLORS.yellow_dark} />
                            </TagCartStyled>
                        </a>
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