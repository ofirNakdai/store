import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent: React.ComponentType;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const { FallbackComponent } = this.props;
      return <FallbackComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
