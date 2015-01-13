'use strict';

var React = require('react'),
    zip = require('lodash.zip');

var ExpandableNav = require('../../src/components/ExpandableNav'),
    ExpandableNavbar = require('../../src/components/ExpandableNavbar'),
    ExpandableNavHeader = require('../../src/components/ExpandableNavHeader'),
    ExpandableNavMenu = require('../../src/components/ExpandableNavMenu'),
    ExpandableNavMenuItem = require('../../src/components/ExpandableNavMenuItem'),
    ExpandableNavPage = require('../../src/components/ExpandableNavPage'),
    ExpandableNavToggleButton = require('../../src/components/ExpandableNavToggleButton');

{
  /*jslint browser: true */
  window.React = React;
  var $ = window.$;
}

var App = React.createClass({
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  render() {
    var headerSmall = <span className="logo">&lt;B&gt;</span>;
    var headerFull = <span>&lt;Bootstrap&gt;</span>;

    var menuItemsSmall = [
      <span className="glyphicon glyphicon-home"></span>,
      <span className="glyphicon glyphicon-user"></span>,
      <span className="glyphicon glyphicon-comment"></span>
    ];
    var menuItemsFull = [
      <span>Home</span>,
      <span>About us</span>,
      <span>Contact us</span>
    ];
    var menuItemsNodes = zip(menuItemsSmall, menuItemsFull).map((menuItem) => {
      return <ExpandableNavMenuItem small={menuItem[0]} full={menuItem[1]} tooltip={"example"}/>;
    });
    var headerStyle = {
      paddingLeft: 5
    };
    var fullStyle = {
      paddingLeft: 50
    };
    return (
      <ExpandableNav expanded={true} >
        <ExpandableNavbar fullClass="full" smallClass="small">
          <ExpandableNavHeader small={headerSmall} full={headerFull} headerStyle={headerStyle} fullStyle={fullStyle}/>
          <ExpandableNavMenu>
            {menuItemsNodes}
          </ExpandableNavMenu>
        </ExpandableNavbar>
        <ExpandableNavToggleButton smallClass="s" className="shared"/>
        <ExpandableNavPage>
          <div className="row">
            <h2>Bootstrap Navigation meets Twitch Navigation</h2>
                <p>This is just a quick and dirty example I made to show off to a friend. Dont forget to change the theme using the dropdown above.</p>
          </div>
          <div className="row">
              <h2>Navbar Styles</h2>
              <p>Just to show off how easy it is to theme!</p>
              <p>ote to Tutors and Judy: The commits on BitBucket does not reflect the teams contribution. The team has been using GitHub on clients request
              Our client has added Jeshua Morrissey (github: jeshuam) to the teams private repo for grading purposes
              #Teams Research topic ideas
              #Feedbacks from users
              #FInal presentation slide
              Important Resources
              Default Welcome page
              Basic Mercurial Tutorial
              Jobs to be Done theory
              Lean Startup methodologies
              www.codecademy.com/en/tracks/ruby
              Rails
              Bug report
              Group Assessments
              Sprint 1 Presentation
              Sprint 1 Evaluation Plan
              Final Client Interaction Report Bitbucket PDF
              Project Description
              The CTO of PwC Australia Robert Love and his Digital ventures team is looking for possibilities in making a centralized identity management system. The aim of such system is to provide a "one-stop-shop" to updating our personal details - update our details once, all concerning parties will be notified.
              However, the idea is still in its infancy stage. The team is assigned to seek out ideas and possibilities in implementing similar systems within the span of 10 weeks. During the course of this project, the team will utilise the Lean Startup methodology as well as Jobs-to-be-Done Theory. Furthermore, the team is strongly encouraged to use PwCs recommended technologies, namely: Git/Github, Heroku, Ruby on Rails, Twitter Bootstrap and Trello.
              Throughout the duration of the project, the team will have a daily standup meetings over Skype with the client to ensure everyone is updated on everyone's progress. Furthermore, weekly WHIP's will be held at PWC so that the client is aware of the progress of the project and can outline any concerns, questions and suggestions to the team.
              </p>
              <button type="button" className="btn btn-inverse nav-style-toggle disabled" data-type="inverse"> Inverse</button>
              <button type="button" className="btn btn-default nav-style-toggle" data-type="default"> Default</button>
              <button type="button" className="btn btn-purple nav-style-toggle" data-type="purple"> Purple</button>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo in eleifend egestas. Nam tellus nulla, rutrum quis efficitur vel, interdum in dolor. Donec nec enim in tortor faucibus efficitur a ut diam. Sed eleifend felis sem, a iaculis ex semper id. Mauris ligula turpis, scelerisque et sem eget, consequat blandit ex. Sed ultricies turpis nec metus egestas, sed egestas libero aliquam. Aliquam laoreet ipsum eget viverra maximus. Ut mollis odio quis leo molestie efficitur. Fusce egestas sapien a elementum gravida. Vestibulum in facilisis justo, id condimentum mauris.
              Donec lacinia lacus</p>
            </div>
            <div className="col-md-3">
              <p>dolor non, vehicula blandit odio. In non dolor ullamcorper mauris finibus dapibus. In quis massa nec tortor fermentum sollicitudin nec id ligula. Sed sagittis volutpat euismod. Nullam nec nulla eu augue lobortis tempus. Ut commodo enim elit, fermentum pharetra augue venenatis quis. Aliquam erat volutpat. Mauris eu urna facilisis, blandit lorem vel, aliquet mauris. Aenean ipsum lectus, pretium non diam ut, egestas elementum lectus. Nam sit amet sem facilisis, blandit dolor id, euismod lorem. Nam vitae consequat purus.
              </p>
            </div>
            <div className="col-md-3">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam porttitor laoreet lorem non vulputate. In suscipit felis et nulla sollicitudin, a ullamcorper enim venenatis. Maecenas sed quam nec turpis gravida egestas et vitae elit. Aenean nisi ex, dapibus et dictum sed, feugiat vel nisi. Mauris a eleifend massa. Nulla facilisi. Duis a erat at arcu pellentesque elementum. Praesent eu metus diam. Sed cursus ipsum ante, quis consequat felis posuere eu. Ut ullamcorper sapien non odio feugiat commodo. Praesent sed pretium purus, in laoreet dui. Suspendisse potenti. Duis volutpat augue et massa mollis commodo. Aliquam vehicula ultrices mattis.
              </p>
            </div>
            <div className="col-md-3">
              <p>Donec faucibus tellus non massa tempor, euismod euismod massa congue. Ut dictum tincidunt erat, vulputate mollis sapien euismod quis. Duis ut risus lacus. Proin sit amet elit a enim sodales posuere vitae sit amet nibh. Suspendisse vitae consectetur nisi. Quisque fringilla diam eros, in ultrices arcu convallis venenatis. Sed tristique sed tellus at sollicitudin. Vestibulum faucibus neque diam. Maecenas sagittis ante in pharetra dictum. Proin pellentesque ultrices magna ac consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis rutrum nibh, a aliquet sapien consequat ut. Sed vel pharetra neque. Mauris porta bibendum aliquam.
              </p>
            </div>
          </div>
        </ExpandableNavPage>
      </ExpandableNav>
    );
  }
});

module.exports = App;
