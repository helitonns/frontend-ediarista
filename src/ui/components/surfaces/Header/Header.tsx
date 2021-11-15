import {useState} from 'react';
import { Container, Toolbar, IconButton, MenuList, MenuItem, Divider } from '@material-ui/core';
import Link from 'ui/components/navigation/Link/Link';
import {HeaderAppBar, HeaderLogo, ButtonContainer, HeaderDrawer } from './Header.styles';
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton';
import React from 'react';
import useIsMobile from 'data/hooks/useIsMobile';


const Header = ()=> {
    const isMobile = useIsMobile();

    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}

const HeaderDesktop = ()=> {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href={'/'}>
                    <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diarista'}/>
                </Link>

                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <ButtonContainer>
                    <Link href={'/cadastro/diarista'} 
                        Component={RoundedButton} 
                        mui={{color: 'primary', variant: 'contained'}}>
                        Seja um(a) diarista
                    </Link>
                    <Link href={'/cadastro/diarista'} Component={RoundedButton}>
                        Login
                    </Link>
                </ButtonContainer>
            </Toolbar>
        </HeaderAppBar>
    );
}

const HeaderMobile = ()=> {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton 
                    edge={'start'} 
                    color={'inherit'} 
                    onClick={() => setDrawerOpen(true)}
                    >
                        <i className={'twf-bars'}/>
                </IconButton>
                <Link href={'/'} >
                    <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diarista'}/>
                </Link>

                <HeaderDrawer 
                    open={isDrawerOpen} 
                    onClose={() => setDrawerOpen(false)}
                    onClick={() => setDrawerOpen(false)}
                    >
                        <MenuList>
                            <Link href={'/login'} Component={MenuItem}>Login</Link>
                            <Divider />
                            <Link href={'/cadastro/diarista'} Component={MenuItem}>Seja um(a) diarita</Link>
                        </MenuList>
                </HeaderDrawer>
            </Toolbar>
        </HeaderAppBar>

    );
};



export default Header;