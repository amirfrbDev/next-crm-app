import Link from 'next/link'

function Layout({ children }) {
    return (
        <>
            <header className='header'>

                <Link href="/" className='header-title'>
                    CRM app
                </Link>

                <Link href="/add-customer">
                    Add Customer
                </Link>
            </header>
            <div className='main'>
                {children}
            </div>
            <footer className='footer'>
                Made With ❤️ By <a href="https://github.com/amirfrbDev" target='_black' rel='noreferrer'>Amir</a> | CRM Project &copy; 2025
            </footer>
        </>
    )
}

export default Layout