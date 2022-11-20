import { NavigationMenu } from '../../../components';
import { GeneralContainer } from '../../../components';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactComponent as BookmarkLogo } from '../../../assets/logos/bookmark-logo.svg';
import { ReactComponent as FacebookLogo } from '../../../assets/logos/facebook-logo.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/logos/twitter-logo.svg';
import { ReactComponent as HamburgerMenuIcon } from '../../../assets/icons/hamburguer-menu-icon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross-icon.svg';

import { useWindowSize } from 'usehooks-ts';

import './hero.css';

export const Hero = () => {
  const { width: viewport } = useWindowSize();
  const BREAKPOINT = 832;
  const isMobileViewport = viewport < BREAKPOINT;
  const isDesktopViewport = viewport >= BREAKPOINT;

  return (
    <section className='hero'>
      <GeneralContainer>
        <header className='hero__header'>
          <a href='/' className='hero__home__link'>
            <BookmarkLogo />
          </a>

          <div className='hero__header__wrapper'>
            {isDesktopViewport && (
              <>
                <NavigationMenu
                  navListClass='hero__nav__list'
                  navLinkClass='hero__nav__link'
                />

                <a
                  href='/'
                  className='button button--primary--red uppercase tracking-100'
                >
                  Login
                </a>
              </>
            )}

            {isMobileViewport && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    className='dialog__controller'
                    aria-label='Open navigation menu'
                  >
                    <HamburgerMenuIcon />
                  </button>
                </Dialog.Trigger>

                <Dialog.Portal className='dialog__root'>
                  <Dialog.Content className='dialog__content'>
                    <div className='dialog__wrapper'>
                      <a href='/' className='dialog__home__link'>
                        <BookmarkLogo className='dialog__bookmark__logo' />
                      </a>

                      <Dialog.Close asChild>
                        <button className='dialog__controller'>
                          <CrossIcon className='dialog__close__icon' />
                        </button>
                      </Dialog.Close>
                    </div>

                    <NavigationMenu
                      navRootClass='mobile__nav__root'
                      navListClass='mobile__nav__list'
                      navItemClass='mobile__nav__item'
                      navLinkClass='mobile__nav__link'
                    />

                    <div className='dialog__links__wrapper'>
                      <a href='/' className='button button--terciary'>
                        Login
                      </a>

                      <div className='dialog__socials__wrapper'>
                        <a
                          href='https://www.facebook.com/'
                          className='dialog__social__link'
                        >
                          <FacebookLogo />
                        </a>

                        <a
                          href='https://www.twitter.com/'
                          className='dialog__social__link flex align-center'
                        >
                          <TwitterLogo />
                        </a>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            )}
          </div>
        </header>

        <main className='hero__main'>
          <div className='hero__body'>
            <div className='hero__body__copy'>
              <h1 className='hero__headline heading heading-300'>
                A Simple Bookmark Manager
              </h1>
              <p className='hero__body__text clr-neutral-300'>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
            </div>
            <div className='hero__body__action'>
              <a
                href='/'
                className='button button-thick button--primary--blue hero__action__button'
              >
                Get it on Chrome
              </a>
              <a
                href='/'
                className='button button-thick button--secondary--gray hero__action__button'
              >
                Get it on Firefox
              </a>
            </div>
          </div>

          <div className='hero__illustration__wrapper'>
            <img
              className='hero__illustration'
              src='/images/illustration-hero.svg'
              width='657'
              height='466'
              alt='INSERT_ALT_TEXT_HERE'
            />
          </div>
        </main>
      </GeneralContainer>
    </section>
  );
};
