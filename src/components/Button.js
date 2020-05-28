import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: Capitalize;
font-size: 1.43rem;
background: transparent;
border: 0.05rem solid var(--mainYellow);
color: var(--mainYellow);
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover{
    background: var(--mainYellow);
    color: var(--mainRed);
}
&:focus{
    outline: none;
}
`;

export const ButtonContainer2 = styled.button`
text-transform: Capitalize;
font-size: 1.43rem;
background: transparent;
border: 0.05rem solid var(--mainTeal);
color: var(--mainTeal);
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover{
    background: var(--mainTeal);
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;
export const ButtonContainer3 = styled.button`
text-transform: Capitalize;
font-size: 1.43rem;
background: transparent;
border: 0.05rem solid var(--mainBlue);
color: var(--mainBlue);
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover{
    background: var(--mainBlue);
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;
export const ButtonContainer4 = styled.button`
text-transform: Capitalize;
font-size: 1.7rem;
background: transparent;
border: 0.1rem solid var(--mainTeal);
color: var(--mainTeal);
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .5s ease-in-out;
&:hover{
    background: var(--mainTeal);
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;