import React, {Component} from 'react'


class Weather extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        console.log("Weather mount")
    }
    
    componentWillMount() {
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {RequestWeatherAPI} = this.props;
        RequestWeatherAPI(this.state.info);
        console.log(this.state.info)
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="info" onChange={this.handleChange}/>
                    <input type="submit" value="확인"/>
                </form>
            </div>
        );
    }
}


export default Weather;