import styled from "styled-components";

export const Container = styled.div`
    //Primary:
    --Desaturated-Dark-Cyan: hsl(180, 29%, 50%);
    //Neutral:
    --Light-Grayish-Cyan-Background: hsl(180, 52%, 96%);
    --Light-Grayish-Cyan-Filter-Tablets: hsl(180, 31%, 95%);
    --Dark-Grayish-Cyan: hsl(180, 8%, 52%);
    --Very-Dark-Grayish-Cyan: hsl(180, 14%, 20%);
    *{
        margin:0;
    }
    font-size: 15px;
    font-family: 'League Spartan', sans-serif;
    --medium: 500;
    --bold: 700;
    width: 100%;
    min-height: 100vh;
    background-color: var(--Light-Grayish-Cyan-Background);
    .company_name{
        font-size: 1.2em;
        color: var(--Desaturated-Dark-Cyan);
        font-weight: var(--bold);
        @media screen and (max-width:1025px) {
            font-size: 1.1em;
        }
    }
    .new_coming{
        font-size: .95em;
        font-weight: var(--medium);
        color: #fff;
        text-transform: uppercase;
        background-color: var(--Desaturated-Dark-Cyan);
        padding: 7px 10px 5px 10px;
        border-radius: 18px;
        @media screen and (max-width:1025px) {
            font-size: .8em;
        }
    }
    .featured_info{
        font-size: .95em;
        font-weight: var(--medium);
        color: #fff;
        text-transform: uppercase;
        padding: 7px 10px 5px 10px;
        border-radius: 18px;
        background-color: var(--Very-Dark-Grayish-Cyan);
        @media screen and (max-width:1025px) {
            font-size: .8em;
        }
    }
    .job_positioning{
        font-size: 1.5em;
        font-weight: var(--bold);
        color: var(--Very-Dark-Grayish-Cyan);
        cursor: pointer;
        margin: 5px 0;
        :hover{
            color: var(--Desaturated-Dark-Cyan);
        }
        :active{
            color: var(--Dark-Grayish-Cyan);
        }
        @media screen and (max-width:1025px) {
            font-size: 1.2em;
        }
    }
    .dot_separator{
        font-size: 1.2em;
        font-weight: var(--medium);
        color: var(--Dark-Grayish-Cyan);
        vertical-align: middle;
        padding: 0 0 8px 0;
    }
    .category_search{
        font-size: 1.05em;
        font-weight: var(--bold);
        color: var(--Desaturated-Dark-Cyan);
        background-color: var(--Light-Grayish-Cyan-Filter-Tablets);
        border: none;
        border-radius: 4px 0 0 4px;
        padding: 9px;
    }
    @keyframes updown {
        from {
            transform: translate3d(0,-200%,0);
        }
        to{
            transform: translate3d(0,40%,0);
        }
    }
`