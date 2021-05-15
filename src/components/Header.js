import React from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <Container>
        <a>
            <img src="images/logo.svg"></img>
        </a>  
        <Menu>
        <a href="#">Model S</a> 
        <a href="#">Model 3</a> 
        <a href="#">Model X</a> 
        <a href="#">Model Y</a> 


        </Menu>    
        <RightMenu>

            <a href="#">Shop</a>
            <a href="#">Tesla Account </a>
            <CustomMenu/>
        </RightMenu>   
            <BurgerNav>
            <CloseWrapper>
              <CustomClose/>
            </CloseWrapper>
           
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In </a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadaster</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index:1 ;

    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex: 1;

    a {
        font-weight:600;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap:nowrap;

    } 
    @media (max-width:768px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items: center;
   a {
    font-weight:600;
    text-transform: uppercase;
   /* padding:0 10px;
    flex-wrap:nowrap;
*/
    margin-right:10px;
} 
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
    postion:fixed;
    top: 0;
    bottom:0;
    right:0;
    background-color: white;
    width:300px;
    z-index: 16;
    list-style:none;
    padding:20px;
    display:flex;
    text-align:start;
    justify-content: flex-start;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2)

        a{
            font-weight:600;
        }
    }`


const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;

`