import styled from 'styled-components';

export default BlinkingWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 320;
    padding: 6px;
    margin: 10px 0;
    background-color: ${props => props.backgroundColor || 'transparent'};
    border: ${props => props.border || 'none'};
    justify-content: center;
    align-items: center;
`