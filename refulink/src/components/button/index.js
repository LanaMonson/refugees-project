import React, {Component} from 'react';
import './index.css';

class Button extends Component{

    render(){
        return(
            // <section class ="section-hero">
            <div>
                <button onClick={this.clickButton}>In Search</button>
                <button onClick={this.clickButton}>I Can Offer</button>
            </div>
        // </section>
        )
    }
}
export default Button;