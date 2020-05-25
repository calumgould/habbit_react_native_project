import styled from 'styled-components';

export default Container = styled.View `
    flex: ${props => props.flex || 1};
    background-color: slategrey;
    justify-content: center;
    align-items: center;
`