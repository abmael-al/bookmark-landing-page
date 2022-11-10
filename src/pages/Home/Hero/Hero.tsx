import { NavigationMenu } from '../../../components';
import * as Dialog from '@radix-ui/react-dialog'
import { ReactComponent as BookmarkLogo } from '../../../assets/logos/bookmark-logo.svg';
import { ReactComponent as HamburgerMenuIcon } from '../../../assets/icons/hamburguer-menu-icon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross-icon.svg';

import { useWindowSize } from 'usehooks-ts';

import './hero.css'

export const Hero = () => {
    const { width: viewport } = useWindowSize();
    const BREAKPOINT = 768;
    const isMobileViewport = viewport < BREAKPOINT;
    const isDesktopViewport = viewport >= BREAKPOINT;

    return <div> 
            <header className='hero__header'>
                <a 
                    href="/"
                    className='hero__home__link'
                >
                    <BookmarkLogo />
                </a>

                <div className='hero__header__wrapper'>
                    {isDesktopViewport &&
                        <>
                            <NavigationMenu 
                                navContainerClass='hero__nav'
                                navLinkClass='hero__nav__link'
                            />

                            <a 
                                href='/'
                                className='button button--primary--red uppercase tracking-100' 
                            >
                                Login
                            </a>
                        </>}

                    {isMobileViewport &&
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button className='dialog__controller' aria-label='Open navigation menu'>
                                    <HamburgerMenuIcon />
                                </button>
                            </ Dialog.Trigger>
                                
                            <Dialog.Portal>
                                <Dialog.Content className='dialog__content'>
                                    <div className='dialog__wrapper'>
                                        <a 
                                            href="/"
                                            className='dialog__home__link'
                                        >
                                            <BookmarkLogo 
                                                className='dialog__bookmark__logo'
                                            />
                                        </a>
                                        
                                        <Dialog.Close asChild>
                                            <button className='dialog__controller'>
                                                <CrossIcon />
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                    
                                    <NavigationMenu />
                                </ Dialog.Content>
                             </ Dialog.Portal>
                        </ Dialog.Root>}
                </div>
            </header>

            <main>
                <div>
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites
                        Open a new browser tab and see your sites load instantly.
                        Try it for free.
                    </p>
                </div>
                <div>
                    <a href="/">Get it on Chrome</a>
                    <a href="/">Get it on Firefox</a>
                </div>
                
                <figure>
                    <img 
                        src="/images/illustration-hero.svg" 
                        alt="INSERT_ALT_TEXT_HERE"
                    />
                </figure>
            </main>
        </div>
}