import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info) {
    this.setState({ hasError: true })
}

    render() {
        if (this.state.hasError) {
            return (
                <div>Ooops. That is not good</div>
            )
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundary