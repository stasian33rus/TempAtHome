import React from 'react'
var e;
var result;


export default class Forma extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ data: {}, isFetching: true, error: null };
    }

    
    componentDidMount() {
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "28cba54e8dmsh324fd3214505d54p1fce1fjsn794e9cdfcfc5"
	}
})
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false }))
            .catch(err => {
              console.log(err);
              this.setState({data: result, isFetching: false, error: err })
            })
    }

    render() {
        const { data, isFetching, error } = this.state;
        
        if (isFetching) return <div>...Loading</div>;

        if (error) return <div>{`Error: ${e.message}`}</div>;

        return <h1>{data.goals[0].gs_id}</h1>;
    }


}