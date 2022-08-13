import React from 'react'


export default class ErrorMessage extends React.Component {
    render(){
        const errors = this.getErrors()
        if(!errors.length)
            return null
        
        return <div className='error-message'>
            <h1>{errors.length === 1 ? "An Error" : "Multiple Errors"} occured</h1>
            {errors.map(error => 
                <div key={error.message}>
                    <p><b>{error.name}:</b> {error.message}</p>
                </div>
            )}
        </div>
    }

    getErrors(){
        const errors = []
        if(this.props.error)
            errors.push(this.props.error)
        if(this.props.errors){
            errors.push(...this.props.errors)
        }
        return errors.filter((error) => error instanceof Error)
    }

    static checkForError(...errors){
        // returns true if any of the passed arguments is an error
        return errors.filter((error) => error instanceof Error).length !== 0
    }
}
