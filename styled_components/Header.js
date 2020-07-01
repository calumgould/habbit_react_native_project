import styled from 'styled-components';

export default Header = styled.Text `
    font-family: PressStart2P-Regular;
    font-size: 30px;
    line-height: 40px;
    margin-top: ${props => props.marginTop || '5%'};
    margin-bottom: ${props => props.marginBottom || '5%'};
    margin-right: ${props => props.marginRight || '10%'};
    margin-left: ${props => props.marginLeft || '10%'};
    text-align: center;
    color: ghostwhite;
`