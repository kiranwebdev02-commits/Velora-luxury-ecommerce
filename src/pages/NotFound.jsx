import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page page-padding flex-center" style={{minHeight: '80vh', flexDirection: 'column'}}>
      <div className="container text-center">
        <h1 className="heading-hero mb-4" style={{fontSize: '6rem', marginBottom: '1rem'}}>404</h1>
        <h2 className="heading-md mb-6">PAGE NOT FOUND</h2>
        <p className="text-muted mx-auto mb-10" style={{color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', marginTop: '1.5rem'}}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
