import styled from 'styled-components';


const Styles = styled.div `
.txtCenter{
    text-align:center;
    margin-top:5em;
}


`

export const Footer = props => (
    <Styles>
        <p class="txtCenter">©Copyright KeeganPalmoWebDev</p>
    </Styles>
)