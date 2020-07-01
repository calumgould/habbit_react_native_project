import {createGlobalStyle} from 'styled-components'

import PressStart2P from '../assets/fonts/PressStart2P-Regular.ttf'

export default createGlobalStyle`
    @font-face {
            font-family: 'PressStart2P-Regular';
            src: local('PressStart2P'), local('Press Start 2P')
            url(${PressStart2P}) format('ttf');
        }
`