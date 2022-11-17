import { NavigationMenu, GeneralContainer } from "../../../components";
import { ReactComponent as BookmarkLogo } from "../../../assets/logos/bookmark-logo.svg";
import { ReactComponent as FacebookLogo } from "../../../assets/logos/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/logos/twitter-logo.svg";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <GeneralContainer className="footer__container">
               <div className="footer__layout__wrapper">
                    <a 
                        href="/"
                        className="footer__home__link"
                    >
                        <BookmarkLogo className="bookmark__logo" />
                    </a>
                    
                    <NavigationMenu 
                        navRootClass="footer__nav__root"
                        navListClass="footer__nav__list"
                        navLinkClass="footer__nav__link"
                    />
               </div>
                
                <div className="footer__socials__wrapper">
                    <a 
                        href='https://www.facebook.com/'
                        className="footer__social__link"
                    >
                        <FacebookLogo />
                    </a>

                    <a 
                        href='https://www.twitter.com/' 
                        className="footer__social__link flex align-center"
                    >
                        <TwitterLogo />
                    </a>                
                </div>
            </GeneralContainer>
        </footer>
    )
}