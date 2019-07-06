import React, { Component } from 'react'

class FormPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''

        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        // console.log(this.state.userId)
        // console.log(this.state.title)
        // console.log(this.state.body)

        //prepare url + data
        const url = "https://jsonplaceholder.typicode.com/posts"
        const data = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
        }

        //post script
        fetch(url, {
            method: 'POST', //post method
            body: JSON.stringify(data), //parse data to json string
            headers: {'Content-Type': 'application/json' }
        }).then(
            res => res.json()
        ).catch(
            error => console.error('Error POST data', error)
        ).then(
            response => console.log('Success', response)
        )

    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>UserId</label>
                    <input type="text" name="userId" onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name="body" onChange={this.changeHandler} />
                </div>
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default FormPost
