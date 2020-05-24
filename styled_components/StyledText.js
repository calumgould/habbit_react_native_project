import styled from 'styled-components';

export default StyledText = styled.Text`
    @import url('../assets/fonts/PressStart2P-Regular.ttf');
    font-family: PressStart2P-Regular;
    font-size: ${props => props.size || '25px'};
    text-align: center;
    line-height: 25;
    color: ${props => props.color || 'ghostwhite'};
`