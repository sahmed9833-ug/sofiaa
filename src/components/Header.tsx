import Logo from "./Logo";
import Button from "./Button";
import { Component } from "react";

class Header extends Component<{}, { isMenuOpen: boolean, isScrolled: boolean }>  {
    state = {
        isMenuOpen: false,
        isScrolled: false
    }

    navigationItems = [
        { title: 'Home', path: '/'},
        { title: 'Experience', path: '/experience'},
        { title: 'Education', path: '/education'}
    ];

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div>
                <div 
                    className={`${this.state.isMenuOpen ? 'bg-black/50 z-10' : 'bg-transparent -z-10'} h-screen w-screen fixed sm:hidden`}
                    onClick={this.toggleMenu}>
                </div>
                <header className={`${this.state.isScrolled ? 'border-b-2' : ''} transition-all z-10 fixed w-full bg-slate-100 dark:bg-slate-600 border-b-periwinkle dark:border-b-gunmetal`}>
                    <nav className="p-4 sm:pl-0 max-w-prose mx-auto sm:flex justify-between">
                        <div className="flex justify-between items-center">
                            <a href="/" className={`${this.state.isScrolled ? 'w-14 sm:w-20' : 'w-20 sm:w-32'} cursor-pointer hover:scale-95 active:scale-90 transition-all`} aria-label="Home">
                                <Logo/>
                            </a>
                            <button
                                data-menu-button 
                                aria-label="Toggle menu" 
                                className="p-3 w-fit h-fit sm:hidden active:bg-periwinkle dark:active:bg-paynes-grey rounded-full transition-colors"
                                onClick={this.toggleMenu}>
                                <svg className="stroke-gunmetal dark:stroke-periwinkle w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <ul className={`${this.state.isMenuOpen ? '' : 'hidden'} pt-4 sm:pt-0 sm:flex sm:items-center`}>
                            {this.navigationItems.map(page => (
                                <li key={page.title} className="mb-4 last:mb-2 sm:last:mb-0 sm:mr-4 sm:last:mr-0 sm:mb-0 h-fit">
                                    <Button title={page.title} path={page.path}/>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }

    toggleMenu = () => {
        this.setState((state) => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }

    handleScroll = () => {
        this.setState({
            isScrolled: window.scrollY > 10
        });
    }
}

export default Header;