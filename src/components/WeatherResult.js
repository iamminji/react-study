import React, {Component} from 'react'


class WeatherResult extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    componentDidMount() {
        console.log("form mount")
    }
    
    componentWillMount() {
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
    }
    
    handleSubmit() {
    
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id"/>
                </form>
            </div>
        );
    }
}


export default WeatherResult;