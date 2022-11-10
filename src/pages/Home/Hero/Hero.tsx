import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ReactComponent as LogoBookmark } from '../../../assets/logos/logo-bookmark.svg'

import './hero.css'

export const Hero = () => {
    return <div> 
            <header className='hero__header'>
                <a href="/">
                    <LogoBookmark />
                </a>

                <div className='hero__header__wrapper'>
                    <NavigationMenu.Root>
                        <NavigationMenu.List className='hero__header__nav'>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='/' >
                                    Features
                                </ NavigationMenu.Link>
                            </ NavigationMenu.Item>
                            
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='/' >
                                    Pricing
                                </ NavigationMenu.Link>
                            </ NavigationMenu.Item>
                            
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='/' >
                                    Contact
                                </ NavigationMenu.Link>
                            </ NavigationMenu.Item>
                        </ NavigationMenu.List>
                    </ NavigationMenu.Root>
                    
                    <a 
                        href='/'
                        className='button button--primary--red uppercase' 
                    >
                        Login
                    </a>
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