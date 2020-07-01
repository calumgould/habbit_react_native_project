import styled from 'styled-components';

export default StyledText = styled.Text`
    font-family: PressStart2P-Regular;
    font-size: ${props => props.size || '25px'};
    text-align: center;
    line-height: 25px;
    color: ${props => props.color || 'ghostwhite'};
`