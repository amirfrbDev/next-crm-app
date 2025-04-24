import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

function Layout({ children }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const router = useRouter();

    const searchInput = useRef();
    const searchButton = useRef();

    useEffect(() => {
        if (isSearchOpen && !router.route.includes("search")) {
            searchInput.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (router.route.includes("search")) {
            setIsSearchOpen(true);
        }
    }, []);

    useEffect(() => {
        const enterClickHandler = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                router.push(`/search?query=${search}`);
            }
        };

        window.addEventListener("keydown", enterClickHandler);

        return () => {
            window.removeEventListener("keydown", enterClickHandler);
        };
    }, [search, router]);

    return (
        <>
            <header className='header'>
                <Link href="/" className='header-title'>
                    CRM app
                </Link>
                <div>
                    {isSearchOpen && (
                        <div className='searchbar'>
                            <button onClick={() => setIsSearchOpen(false)}>
                                <IoIosClose />
                            </button>
                            <input
                                type='text'
                                placeholder='Search'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                ref={searchInput}
                            />
                            <button
                                className='search-button'
                                onClick={() => router.push(`/search?query=${search}`)}
                                ref={searchButton}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    )}
                    {!isSearchOpen && (
                        <button onClick={() => setIsSearchOpen(true)}>
                            <CiSearch />
                        </button>
                    )}
                    <Link href="/add-customer">
                        Add Customer
                    </Link>
                </div>
            </header>
            <div className='main'>
                {children}
            </div>
            <footer className='footer'>
                Made With ❤️ By <a href="https://github.com/amirfrbDev" target='_black' rel='noreferrer'>Amir</a> | CRM Project &copy; 2025
            </footer>
        </>
    );
}

export default Layout;
