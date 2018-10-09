import React, { Component } from 'react';


class Bio extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    
    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    
    render(){
        return( 
            <div className = 'bio'>
        
               <p onClick = { () => { this.toggleModal()}}  className = 'bio__summary'>{this.props.summary.slice(0, 300)}<a className = 'bio__summary-continue'>| Show More</a></p>
               
               <div className = {this.state.showModal ? 'modal modal-show' : 'modal modal-hide'} onClick = {() => { this.toggleModal()}}>
                    <div className = 'modal__content'><button><i className="far fa-times-circle"></i></button><h3 className = 'heading'>About</h3>{this.props.content}</div>
               </div>
        
            </div>
        )
    }
}

export default Bio;