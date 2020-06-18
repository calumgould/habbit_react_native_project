import styled from 'styled-components';

export default ButtonContainer = styled.TouchableOpacity `
    align-items: center;
    background-color: #b32d00;
    padding: 15px 30px;
    border: 3px solid black;
    margin-top: ${props => props.marginTop || '30px'};
    margin-bottom: ${props => props.marginBottom || '30px'};
    margin-right: ${props => props.marginRight || 0};
    margin-left: ${props => props.marginLeft || 0};
    box-shadow: 4px 4px black;
`