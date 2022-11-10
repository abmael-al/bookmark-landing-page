import { 
    Root as NavRoot, 
    List as NavList, 
    Item as NavItem, 
    Link as NavLink
} from '@radix-ui/react-navigation-menu';

interface NavigationMenuProps {
    navContainerClass?: string;
    navLinkClass?: string;
}

export const NavigationMenu = ({ navContainerClass, navLinkClass }: NavigationMenuProps) => {
    const linkClass = navLinkClass ? navLinkClass : '';
    
    return (
        <NavRoot>
            <NavList className={ navContainerClass ? navContainerClass : '' }>
                <NavItem>
                    <NavLink 
                        href='/' 
                        className={linkClass}  
                    >
                        Features
                    </ NavLink>
                </ NavItem>
                
                <NavItem>
                    <NavLink 
                        href='/' 
                        className={linkClass}  
                    >
                        Pricing
                    </ NavLink>
                </ NavItem>
                
                <NavItem>
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