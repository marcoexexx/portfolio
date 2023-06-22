import { Component, ErrorInfo, ReactElement, ReactNode } from "react";

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactElement;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught Error", error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}


export default ErrorBoundary;
