import * as Tabs from "@radix-ui/react-tabs"
import './features.css';

export const Features = () => {
    return (
        <section className='features'>
            <div className='features__body'>
                <h2 className='heading heading-200'>Features</h2>
                <p className='features__body__text'>
                    Our aim is to make quick and easy for you to access your 
                    favourite websites. You bookmark sync between your devices
                    so you can access them on the go.
                </p>
            </div>

            <Tabs.Root defaultValue="tab1">
                <Tabs.List className="tabs__list">
                    <Tabs.Trigger className="tabs__trigger" value="tab1">
                        Simple Bookmarking
                    </ Tabs.Trigger>
                    <Tabs.Trigger className="tabs__trigger" value="tab2">
                        Speedy Searching
                    </ Tabs.Trigger>
                    <Tabs.Trigger className="tabs__trigger" value="tab3">
                        Easy Sharing
                    </ Tabs.Trigger>
                </ Tabs.List>
                <Tabs.Content className="tabs__content" value="tab1">
                    <figure className='tabs__content__illustration'>
                        <img 
                            src="/images/illustration-features-tab-1.svg"
                            alt="" 
                            loading="lazy"
                        />
                    </figure>
                    <div className="tabs__content__body">
                        <div>
                            <h2 className="heading heading-200 line-h-1">Bookmark in one click</h2>
                            <p className='tabs__content__text clr-neutral-300'>
                                Organize your bookmarks however you like. Our simple 
                                drag-and-drop interface gives you complete control 
                                over how you manage your favourite sites.
                            </p>
                            <a href="/" className='tabs__content__link button button-thick button--primary--blue'>More Info</a>                        
                        </div>                    
                    </div>
                </ Tabs.Content>
                <Tabs.Content className="tabs__content" value="tab2">
                    <figure className='tabs__content__illustration'>
                        <img 
                            src="/images/illustration-features-tab-2.svg"
                            alt="" 
                            loading="lazy"
                        />
                    </figure>
                    <div className="tabs__content__body">
                        <div>
                            <h2 className="heading heading-200 line-h-1">Intelligent search</h2>
                            <p className='tabs__content__text clr-neutral-300'>
                                Our powerful search feature will help you find saved
                                sites in no time at all. No need to trawl through all 
                                of your bookmarks.
                            </p>
                            <a href="/" className='tabs__content__link button button-thick button--primary--blue'>More Info</a>                        
                        </div>                    
                    </div>                
                </ Tabs.Content>
                <Tabs.Content className="tabs__content" value="tab3">
                    <figure className='tabs__content__illustration'>
                        <img 
                            src="/images/illustration-features-tab-3.svg"
                            alt="" 
                            loading="lazy"
                        />
                    </figure>
                    <div className="tabs__content__body">
                        <div>
                            <h2 className="heading heading-200 line-h-1">Share your bookmarks</h2>
                            <p className='tabs__content__text clr-neutral-300'>
                                Easily share your bookmarks and collections with others.
                                Create a shareable link that you can send at the click of
                                a button.
                            </p>
                            <a href="/" className='tabs__content__link button button-thick button--primary--blue'>More Info</a>                        
                        </div>                    
                    </div>                  
                </ Tabs.Content>
            </ Tabs.Root>
        </section>
    )
}