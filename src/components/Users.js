import React, { Component } from 'react'

class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
    }

    componentDidMount(){
        const urlFetch = fetch('https://jsonplaceholder.typicode.com/users')
        urlFetch.then( res => {
           if(res.status === 200)
              return res.json()   
        }).then( resJson => {
           this.setState({
              items: resJson
           })
        })
     }
    
    render() {
        const {items} = this.state
        return (
            <div>
                <ul>
                    {items.map(item => 
                        <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Users
