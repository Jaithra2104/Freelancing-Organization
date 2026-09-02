import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <SEO
        title="404 - Page Not Found | VyuhaTech"
        description="The page you are looking for does not exist or has been moved."
        noindex={true}
      />
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Oops! The page you are looking for doesn&apos;t exist, was removed, or is temporarily unavailable.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-btn-primary">
            Return to Homepage →
          </Link>
          <Link to="/services" className="not-found-btn-secondary">
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
