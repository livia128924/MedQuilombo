import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@font-face {
    font-family: 'Avenir', sans-serif;
    src: url('/assets/fonts/AvenirLTStd-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir', sans-serif;
    src: url('/assets/fonts/AvenirLTStd-Heavy.otf') format('opentype');
    font-weight: bolder;
    font-style: normal;
}

@font-face {
    font-family:'Avenir', sans-serif;
    src: url('/assets/fonts/AvenirLTStd-Heavy.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Avenir', sans-serif;
    src: url('/assets/fonts/AvenirLTStd-Roman.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}
:root {

    
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3E87CB;
  --toastify-color-success: #467B3C;
  --toastify-color-warning: #DC732D;
  --toastify-color-error: #C13F38;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
  
  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 60px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-font-weight: 800;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: 'Avenir', sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

    * {

margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: normal;
       font-family: 'Avenir', sans-serif;
        font-size: 14px;
        
    }
    body, html {
      // 
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
        color:"#0E2C3A";
        background: #FFFFFF;
       font-family: 'Avenir', sans-serif;
    }


    .Toastify__toast-container--top-right {
        margin-top: 73px;
        margin-right: 39px;
    }

    tspan {
        color: #A8A7A6;
        font-size: 0.75rem;
    }

    input::-ms-reveal,
input::-ms-clear {
  display: none;
}
  

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    transition: all 0.2s ease-in;
  }
  
`;
