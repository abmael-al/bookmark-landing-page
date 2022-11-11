import { 
    Root as NavRoot, 
    List as NavList, 
    Item as NavItem, 
    Link as NavLink
} from '@radix-ui/react-navigation-menu';

interface NavigationMenuProps {
    navRootClass?: string;
    navListClass?: string;
    navItemClass?: string;
    navLinkClass?: string;
}

export const NavigationMenu = ({ 
    navRootClass, 
    navListClass, 
    navItemClass,
    navLinkClass 
}: NavigationMenuProps) => {
    const itemClass = navItemClass || '';
    const linkClass = navLinkClass || '';
    
    return (
        <NavRoot className={ navRootClass || '' }>
            <NavList className={ navListClass || '' }>
                <NavItem className={itemClass}>
                    <NavLink 
                        href='/' 
                        className={linkClass}  
                    >
                        Features
                    </ NavLink>
                </ NavItem>
                
                <NavItem className={itemClass}>
                    <NavLink 
                        href='/' 
                        className={linkClass}  
                    >
                        Pricing
                    </ NavLink>
                </ NavItem>
                
                <NavItem className={itemClass}>
                    <NavLink 
                        href='/' 
                        className={linkClass}  
                    >
                        Contact
                    </ NavLink>
                </ NavItem>
            </ NavList>
        </ NavRoot>
    )
}