import React, {Component} from 'react'
import './index.css'

class Card extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-image">
                    <div className="card-type-box">Provider</div>
                </div>
                <div>
                    <div className = "card-content" ></div>
                    <span>San Francisco, California</span>
                    <h3>Title4</h3>
                    <p>If you need a ride to work...</p>
                </div>
            </div>
        )
    }
}
export default Card;