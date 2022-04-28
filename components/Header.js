import Link from 'next/link'
export default function Header() {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className='navbar-brand'>
                        Markdown + Nextjs
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link href="/">
                            <a className='nav-link'>
                                <li className="nav-item"> Home </li>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className='nav-link'>
                                <li className="nav-item">About </li>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}