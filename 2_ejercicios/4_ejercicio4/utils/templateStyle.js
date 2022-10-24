// Plantilla de estilos de la nav bar con menu hamburguesa

export const templateStyle = () => {
    return `*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .nav {
        background: #293241;
        height: 80px;
        color: #fff;
    }
    
    .nav__container {
        display: flex;
        height: 100%;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }
     
    .nav__img {
       width: 80px;
       
    }
    
    .nav__logo {
        font-size: 1.5em;
        font-weight: 900;
    }
    
    .nav__menu {
        display: grid;
        grid-auto-flow: column;
        gap: 3em;
    }
    
    .nav__item {
        color: #fff;
        text-decoration: none;
        --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    
    .nav__item::after {
        
        content: "";
        display: block;
        background: #fff;
        width: 100%;
        margin-top: 3px;
        height: 3px;
        clip-path: var(--clippy);
        transition: clip-path .8s;
    }
    
    .nav__item:hover {
        --clippy: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    
    .nav__input:checked + .nav__menu{
        background-color: brown;
    }
    
    .nav__label, .nav__input {
        display: none;
    }
    
    @media screen and (max-width: 768px) {
        .nav__label {
            display: block;
            cursor: pointer;
        }
        
        .nav__menu {
            position: fixed;
            top: 80px;
            bottom: 0;
            background-color: #f08080;
            width: 100%;
            left: 0;
            display:flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
             clip-path: circle(0 at center);  
            transition: clip-path 1s ease-in-out;
        }
    
         .nav__input:checked + .nav__menu{
            clip-path: circle(100% at center);
        } 
    }`
    
}