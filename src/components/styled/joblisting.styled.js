import styled from "styled-components";
import bgheaderdesktop from '../images/bg-header-desktop.svg';
import bgheadermobile from '../images/bg-header-mobile.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Header = styled.div`
    min-height: 150px;
    width: 100%;
    background-color: var(--Desaturated-Dark-Cyan);
    background-image: url(${bgheaderdesktop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width:1025px) {
        width:auto;
    }
    @media screen and (max-width:600px) {
        width:auto;
        background-image: url(${bgheadermobile});
    }
`
export const Styledjoblist = styled(Vstack)`
    margin: 50px auto;
`
export const Jobcard = styled(Hstackflexi)`
    width: 78%;
    min-height: 115px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin: 30px auto;
    box-shadow: 0 15px 15px -1px hsl(180, 29%, 50%, 0.2);
    border-left: ${(props) => props.featured === true? '5px solid var(--Desaturated-Dark-Cyan)' : 'none'};
    @media screen and (max-width:1025px) {
        width:auto;
        margin: 30px 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        margin: 30px 20px;
    }
`
export const Logo = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 0 15px;
    @media screen and (max-width:1025px) {
        width: 70px;
        height: 70px;
        margin: 0;
    }
    @media screen and (max-width:600px) {
        width: 60px;
        height: 60px;
        margin: -45px 0 20px -15%;
    }
`
export const FirstRow = styled(Hstack)`
    gap: 10px;
    align-items: center;
    @media screen and (max-width:600px) {
        margin: 0;
    }
`
export const FirstColumn = styled(Vstack)`
    gap: 6px;
    justify-content: space-evenly;
    margin: 0 10px;
    @media screen and (max-width:1025px) {
        width:230px;
    }
    @media screen and (max-width:600px) {
        width:220px;
        padding: 0 30% 20px 0;
        margin: 0 0 0 -15%;
        border-bottom: 1px solid var(--Dark-Grayish-Cyan);
    }
`
export const ThirdRow = styled(Hstack)`
    gap: 10px;
    align-items: center;
    font-size: 1.12em;
    color: var(--Dark-Grayish-Cyan);
    @media screen and (max-width:1025px) {
        gap: 2%;
        width: 100%;
        font-size: .9em;
    }
    @media screen and (max-width:600px) {
        margin: 0px;
        font-size: 1em;
    }
`
export const Category = styled(Hstack)`
    gap: 14px;
    align-items: center;
    button{
        font-size: 1.05em;
        font-family: 'League Spartan', sans-serif;
        font-weight: var(--bold);
        color: var(--Desaturated-Dark-Cyan);
        background-color: var(--Light-Grayish-Cyan-Filter-Tablets);
        border: none;
        border-radius: 4px;
        padding: 10px 10px;
        cursor: pointer;
        &:hover{
            color:#fff;
            background-color: var(--Desaturated-Dark-Cyan);
        }
    }
    @media screen and (max-width:1025px) {
        width: 50%;
        flex-wrap: wrap;
        margin: 5px 0;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        flex-wrap: wrap;
        margin: 20px auto 5px;
    }
`
export const Searchbar = styled(Hstack)`
    gap: 10px;
    height: 50px;
    width: 76.8%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-radius: 5px;
    animation: updown .2s ease-out;
    animation-direction: normal;
    animation-iteration-count: 1;
    background-color: #fff;
    box-shadow: 0 15px 15px -1px hsl(180, 29%, 50%, 0.2);
    margin:-35px auto;
    @media screen and (max-width:1025px) {
        width: auto;
        height:auto;
        margin:-30px 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height:auto;
        padding: 8px 20px;
        margin: -30px 20px;
    }
`
export const SearchedCategory = styled(Category)`
    width:400%;
    img{
        font-size: 1.05em;
        font-family: 'League Spartan', sans-serif;
        font-weight: var(--bold);
        color: red;
        background-color: var(--Desaturated-Dark-Cyan);
        border: none;
        border-radius: 0 4px 4px 0;
        padding: 9px;
        cursor: pointer;
        &:hover{
            color:#fff;
            background-color: var(--Very-Dark-Grayish-Cyan);
        }
    }
    @media screen and (max-width:600px) {
        margin: 5px auto;
    }
`
export const ClearCategory = styled(Category)`
    button{
        background-color: #fff;
        &:hover{
            color:var(--Desaturated-Dark-Cyan);
            text-decoration: underline;
            background-color: #fff;
        }
    }
`
export const SelectedCategory = styled(Hstack)`
    gap: 0px;
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Desaturated-Dark-Cyan);
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    p{
        font-size: .8rem;
    }
`