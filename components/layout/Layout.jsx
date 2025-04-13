import Link from 'next/link'

function Layout({ children }) {
    return (
        <>
            <header className='header'>
                <h2>CRM app</h2>
                <Link href="/add-customer">
                    Add Customer
                </Link>
            </header>
            <div className='main'>
                {children}
            </div>
            <footer className='footer'>
                Made With ❤️ By <a href="https://github.com/amirfrbDev" target='_black' rel='noreferrer'>Amir</a> | CRM Project &copy;
            </footer>
        </>
    )
}

export default Layout