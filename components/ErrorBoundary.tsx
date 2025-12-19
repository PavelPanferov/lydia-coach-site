import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 max-w-md">
              <h1 className="text-4xl font-bold text-red-600 mb-4 font-oswald">
                Что-то пошло не так
              </h1>
              <p className="text-gray-600 mb-6">
                Пожалуйста, обновите страницу или попробуйте позже.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition-colors"
              >
                Обновить страницу
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
