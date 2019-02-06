import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Logo from './Logo';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score1: 0,
      score2: 0,
      score3: 0,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(img1, img2, score) {
    axios.get('http://localhost:9000/match/'+img1+'/'+img2, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }})
      .then(response => {
            console.log(response)
            this.setState({[score]: response.data.score})
        })
  }

  render() {
    return (
      <div>
        <Logo/>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://i.imgur.com/oKtUeeW.jpg" className="img-fluid"/>
                </div>
                <div className="col">
                    <div className="row mt-0">
                        <div className="col text-center">
                            <h1 className={this.state.score1 <= 0.0 ? 'alert alert-secondary' : this.state.score1 <= 20 ?  'alert alert-danger' : this.state.score1 <= 40 ? 'alert alert-warning' : 'alert alert-success'}>{Number.parseFloat(this.state.score1).toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className="row mb-0">
                        <div className="col">
                            <button type="button" onClick={() => this.handleClick('oKtUeeW.jpg','Jq6gTiw.jpg','score1')} className="btn btn-primary btn-lg btn-block">Match !</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src="https://i.imgur.com/Jq6gTiw.jpg" className="img-fluid"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="https://i.imgur.com/oKtUeeW.jpg" className="img-fluid"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className={this.state.score2 <= 0.0 ? 'alert alert-secondary' : this.state.score2 <= 20 ?  'alert alert-danger' : this.state.score2 <= 40 ? 'alert alert-warning' : 'alert alert-success'}>{Number.parseFloat(this.state.score2).toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" onClick={() => this.handleClick('oKtUeeW.jpg','Ku6pcy4.jpg','score2')} className="btn btn-primary btn-lg btn-block">Match !</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src="https://i.imgur.com/Ku6pcy4.jpg" className="img-fluid" height="250" width="250"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="https://i.imgur.com/WrY3y7T.jpg" className="img-fluid"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className={this.state.score3 <= 0.0 ? 'alert alert-secondary' : this.state.score3 <= 20 ?  'alert alert-danger' : this.state.score3 <= 40 ? 'alert alert-warning' : 'alert alert-success'}>{Number.parseFloat(this.state.score3).toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" onClick={() => this.handleClick('WrY3y7T.jpg','cVFwl3z.jpg','score3')} className="btn btn-primary btn-lg btn-block">Match !</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src="https://i.imgur.com/cVFwl3z.jpg" className="img-fluid"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
