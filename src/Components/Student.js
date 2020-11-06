import React, {Component} from 'react';
import './Student.css';

class Student extends Component {

    constructor() {
        super();
        this.state = {
            scores: 0,
            success: false,
            fail: false
        }
    }

    componentDidMount () {
        this.setState({
            scores: this.props.scores
        });
    }

    addScore() {
        this.setState({
            scores: this.state.scores + 1
        },
        () => {
            if (this.state.scores >= 350){
                this.setState({success:true})
            }
        }
        );
    }

    subScore() {
        this.setState({
            scores: this.state.scores - 1
        },
        () => {
            if(this.state.scores <= 350) {
                this.setState({fail:true})      
            }
        }
        )
    }

    render() {
        const isSuccess = this.state.success;
        let txt;
        if(isSuccess) {
            txt = <span>Success</span>
        } else {
            txt = <span>Fail</span>;
        }
        return (
            <div className="student">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="add" onClick = { () => this.addScore()}>+</button>
                        <button className="sub" onClick = { () => this.subScore()}>-</button>
                        </h2>
        <p className="universityName">{this.props.university} {txt}</p>
                </div>
                <div className="right">
                    <div className="score">{this.state.scores}</div>
                </div>
            </div>
        )
    }
}

export default Student;