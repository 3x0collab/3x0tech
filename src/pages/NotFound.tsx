import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SEOHead
        title="Page Not Found — 3x0Tech Solutions"
        description="The page you're looking for doesn't exist."
        keywords="404 error, page not found"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="text-8xl font-bold gradient-text">404</div>
          <h1 className="text-2xl font-bold">Page not found</h1>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <NavLink to="/">
              <Button className="rounded-xl font-semibold gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </NavLink>
            <Button
              variant="outline"
              className="rounded-xl font-semibold gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
