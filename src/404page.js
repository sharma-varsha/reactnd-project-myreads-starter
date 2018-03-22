import React from 'react'

/* Css template from bootstrap */

class NoMatchedRouteComponent extends React.Component {

    render () {
        return (
            <div>
            <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <a href="http://localhost:3000" className="btn btn-primary btn-lg">
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

export default NoMatchedRouteComponent