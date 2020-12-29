import React, {Component} from "react"
import "./App.css"

class Cardcreater extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.Search,
                })
            })
    }
    render() {
        const {items} = this.state
        return (
            <>
                <h1>Movies</h1>
                <div className="main">
                    {items.map((item) => (
                        <div className="main-card">
                            <img src={item.Poster} alt={item.Poster}></img>
                            <div className="title">{item.Title}</div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Cardcreater
