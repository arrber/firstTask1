import React, { Component } from 'react';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ 
  faRuler,
  faGlobe,
  faSearch,
  faBullhorn,
  faMedal,
  faPercentage,
  faItalic,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="card-holder">
        <div className="card tld">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faRuler} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>The TLD</h4>
            </div>
            <p className="description">Does the domain extension math the language of the domain name?</p>
          </div>
        </div>
        <div className="card domain-length">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faRuler} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Domain Length</h4>
            </div>
            <div className="text">
              <p className="description">Is the domain short enough to remember?</p>
            </div>
          </div>

        </div>
        <div className="card language">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faGlobe} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Language</h4>
            </div>
            <p className="description">How complex is the actuall domain name?</p>
          </div>
        </div>
        <div className="card international-recognition">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faMedal} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>International recognition</h4>
            </div>
            <p className="description">Can the domain name be used on an international scale?</p>
          </div>
        </div>
        <div className="card search-engine">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faSearch} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Search engine</h4>
            </div>
            <p className="description">Does the domain follow search engine guidelines?</p>
          </div>
        </div>
        <div className="card advertising-potential">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faBullhorn} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Advertising Potential</h4>
            </div>
            <p className="description">Could the domain be used for advertising campaigns?</p>
          </div>
        </div>
        <div className="card sales-oppurtunities">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faPercentage} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Sales Oppurtunities</h4>
            </div>
            <p className="description">Can the domain name be used on an international scale?</p>
          </div>
        </div>
        <div className="card typo-susceptibility">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faItalic} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Typo susceptibility</h4>
            </div>
            <p className="description">How high is the risk of mistyping the domain name?</p>
          </div>

        </div>
        <div className="card business-potential">
          <div className="icon-holder">
            <FontAwesomeIcon icon={faLightbulb} size='3x' color='blue'/>
          </div>
          <div className="main-holder">
            <div className="title">
              <h4>Business potential</h4>
              <p className="description">Can the domain be used as your company address?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;