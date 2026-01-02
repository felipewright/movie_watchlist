import { Link } from 'react-router'

const ErrorPage = () => {
    return (
        <div>
            <h2>There was an error while loading the page.</h2>
            <Link><p>Click here to go back to home.</p></Link>
        </div>
    )
}

export default ErrorPage;