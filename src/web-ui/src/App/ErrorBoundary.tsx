import React, { ErrorInfo } from "react";


export default class ErrorBoundary extends React.Component<React.PropsWithChildren> {
    state: {
        error: Error | null,
        errorInfo: ErrorInfo | null,
    }

    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({error, errorInfo});
    }

    render(): React.ReactNode {
        if (this.state.error) {
            return <div className="error-boundary">
                <h1>Something went Wrong</h1>
            </div>
        } else {
            return this.props.children;
        }
    }
}
