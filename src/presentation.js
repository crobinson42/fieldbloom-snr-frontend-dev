// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  htmlOne = () =>
    ({
      __html: '' +
'// spread operator\r\n' +
'const user = { ...response.data }\r\n' +
'\r\n'+
'// arrow functions\r\n' +
'componentDidMount () {\r\n' +
'  axios.get(...).then(res => this.setState({ user: res.data }) )\r\n' +
'}\r\n' +
'\r\n'+
'// Promises\r\n' +
'const promise = new Promise( (resolve, reject) => { ... })\r\n'
            })
  
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Fieldbloom Senior Frontend Developer
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cory Robinson is interested in the position!
          </Text>
          <span style={{ color: 'lightgrey' }}>
            <em>(hit the right arrow key to start ->)</em>
          </span>
        </Slide>

        {/* #1 */}
        <Slide transition={['fade']} bgColor="tertiary">
          <div style={{ color: 'white' }} >
            #1 - Explain, in your own words, how data flows through a React and Redux application. How does this differ from frameworks like Angular that use two-way data binding?
          </div>

          <quote>

            <div style={{ fontStyle: 'italic' }}>
              "Let me first start by saying Redux is awesome!
              I've been using React since it first went open-source and Redux didn't exist.
              The flux pattern came in early on and in short is the pattern for data flow
              top-down in the application and components. Redux [and react-redux] aids in following the flux
              pattern in React apps by using component `context` and providing the Redux store/data
              from the top down.
            </div>

            <div style={{ fontStyle: 'italic' }}>
              This is much different from other frameworks like Angular, Ember, & Vue which all use
              two-way databinding mostly in the observer pattern [and some magic]."
              {' '}
              <small style={{ color: 'lightblue' }}>See my custom example of 2-way data-binding: <a href="https://jsfiddle.net/coryrobinson42/wgLhxqtn/6/">JsFiddle.com/crobinson</a></small>
            </div>

          </quote>

          <strong>
            -Cory Robinson
          </strong>
        </Slide>

        {/* #2 */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            #2 - Name 3 pros and 3 cons of the working with data in context of a React and Redux application.
          </Heading>

          <div style={{ float: 'left'}}>
            <h4>Pros</h4>

            <ul>
              <li>Predictable</li>
              <li>Imperative</li>
              <li>Compartmentalized</li>
            </ul>
          </div>

          <div style={{ float: 'right' }}>
            <h4>Cons</h4>

            <ul>
              <li>Lots of Boilerplate</li>
              <li>Lots of Boilerplate</li>
              <li>Lots of Boilerplate</li>
            </ul>
          </div>

          <div style={{ clear: 'both'}}></div>
        </Slide>

        {/* #3 */}
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <div>
            #3 - How do you deal with asynchronous data requests within a React and Redux application? How would you do this WITHOUT a library (i.e. Thunks or Sagas)?
          </div>

          <br/>

          <div style={{ color: 'lightblue' }}>
            With redux-axios-middleware library is useful, see below example.
          </div>

          <pre style={{ textAlign: 'left', fontSize: '65%', marginLeft: '25%' }}>
            {`
// actions/fetchUsers.js
export const fetchAllUsers = () => ({
  type: 'FETCH_ALL_USERS',
  payload: {
    request: {
      url: '/api/users'
    }
  }
})
            `}
          </pre>

          <br/>

          <div style={{ color: 'yellow' }}>
            If a library was not available, I would use the fetch API and dispatch
            response results to the store for app wide consumption and updates, ie: any
            loading/spinner components, disabled button states, etc..
          </div>
        </Slide>

        {/* #4 */}
        <Slide transition={['zoom']} bgColor="primary" textColor="tertiary">
          <div>#4 - What are pure functions? What are their significance in React and Redux?</div>

          <Text>
            Pure functions take input and provide output based on those inputs.
            There are no side effects that manipulate or play any role in the output,
            simply input -> output. The output is always the same (predictable)
            based on the input. This is why redux is more testable than other state
            management solutions like Mobx.
          </Text>
        </Slide>

        {/* #5 */}
        <Slide transition={['fade']} bgColor="tertiary">
          <div style={{ color: 'white' }} >
            #5 - What is immutability? Why would would you use it in React and Redux? Is it always necessary?
          </div>

          <quote>

            <small style={{ fontStyle: 'italic' }}>
              Understanding and programming with regards to immutable data structures is important for
              app code quality, reliability, and testability. Non-primitives are passed by reference
              not value which means assignment to an object property may not trigger a re-render in
              a React component because object === object (by reference). <a href="https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L14">React-redux reference</a>
            </small>

            <pre style={{ textAlign: 'left', fontSize: '50%', marginLeft: '25%' }}>
              {`
// bad
function userReducer(state, action) {
    switch (action.type) {
    	case 'FETCH_USER_SUCCESS':
        	return state.user = action.payload
    }
}

// good
...
        return {
          ...state,
          user: { ...action.payload }
        }
..
              `}
            </pre>

            <div style={{ fontStyle: 'italic' }}>
              <small style={{ color: 'lightblue' }}>See my custom example using immutable.js: <a href="https://jsfiddle.net/coryrobinson42/c0kupfuy/">JSFiddle.com/crobinson</a></small>
            </div>

          </quote>

          <strong>
            -Cory Robinson
          </strong>
        </Slide>

        {/* #6 */}
        <Slide transition={['fade']} bgColor="quartenary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            #6 - What is your preferred method of dealing with styles in large Javascript applications? Why?
          </Heading>

          <Text textColor="primary" style={{ fontSize: '70%' }}>
            In large applications I have found it easiest to keep styles separate from the javascript.
            This doesn't mean it's the right, best, or only way... I've simply experienced so much
            hassle on medium to large teams when having some css files, some styles inlined in JS, and
            3rd party styles! I prefer to keep global .css/.scss/.less files in a /styles dir and component
            specific stylesheet files next to the component in the same dir.
            <br/>
            <br/>
            Long-term maintainability, feature enhancements, and bug fixes are so much easier when the
            stylesheets are organized in a neat and ordered structure. I am always open to new ideas
            and methods teams are using to organize stylesheets vs. inlining css->JS.
          </Text>
        </Slide>

        {/* #7 */}
        <Slide transition={['spin','fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            #7 - What is the point of unit tests for code? What are 3 ways that you keep your code testable?
          </Heading>

          <div>
            Depending on the development team structure, sometimes unit tests drive development (ie: TDD)
            or explain how the code works and can be used through logical test steps.
            Unit tests also aid in letting a dev know they broke something during a code change.

            <ol style={{ color: 'grey', textAlign: 'left' }}>
              <li>Write unit tests from the start!</li>
              <li>Write modular code and logic so that it can be tested in chunks</li>
              <li>Add unit tests and keep code coverage up for every change</li>
              <li>*Bonus: Require unit tests to be ran in project repo git hooks and the CI/CD pipeline</li>
            </ol>
          </div>
        </Slide>

        {/* #8 */}
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <div>
            #8 - What are your 3 favorite features of ES6? Why? How do they add to developer productivity and app performance?
          </div>

          <br/>

          <div style={{ color: 'lightblue' }}>
            <ul style={{ textAlign: 'left' }}>
              <li>
                The spread operator is faster than typing `Object.assign(...)`
              </li>

              <li>
                Arrow functions reference the lexical `this`, one less `const self = this` declaration!
              </li>

              <li>
                Native Promises. Need I say more?!
              </li>
            </ul>
          </div>

          <br/>

          <pre style={{ textAlign: 'left', fontSize: '65%' }}
            dangerouslySetInnerHTML={this.htmlOne()}
          >
          </pre>
        </Slide>

        {/* #9 */}
        <Slide bgColor="secondary">
          <Heading size={6} textColor="quartenary">
            #9 - Have you used Docker before? If so, what for?

            <Text style={{ color: 'lightblue' }}>
              Yes, I use Docker for CI/CD container build pipelines in Circle CI and Codeship to manage
              our environment build processes. I am also in the process of converting over several
              projects running on Vagrant to use Docker so that my team can utilize Google Cloud Platform
              to run the PHP apps.
            </Text>
          </Heading>
        </Slide>

        {/* #10 */}
        <Slide transition={['fade']} bgColor="tertiary">
          <div style={{ color: 'white' }} >
            #10 - In your view, what's the difference between frontend developers and UI/UX designers and where do these positions overlap?
          </div>

          <br/>

          <quote>
            <em>
              Frontend developers are the builders who know the right tools, materials, and method to put something together.
              UI/UX are the architects and designers - they know how it should look, feel, and interact to the end customer.
              Frontend developers get a set of plans from the UI/UX team and
              implement it in code. They both work together closely to craft a
              beautiful product in the end.
              <br/>
              <br/>
              The most overlapping area, in my opinion, is where both want the
              final product to be smooth, fluid, great looking, and masterful.
              Sometimes judgements and opinions vary between the two but usually
              meld together in the final solution through planning, design, and discussion.
            </em>
          </quote>

          <strong>

          </strong>
        </Slide>

        <Slide transition={['slide', 'zoom', 'fade', 'spin']}>
          <Heading>
            Thank You!
          </Heading>

          <div>I built this presentation in React.js</div>

          <div>I hope it made the process a little less mundane and I articulated my answers clearly.</div>

          <div style={{ padding: '20px', fontFamily: '"Indie Flower", cursive'}}>
            I do not have many open-source projects as of lately since I have dedicated much of my time
            to work projects. Most of the work I have been doing is for backend dashboards which are not
            publicly accessible. I would be happy to screenshare and demonstrate some of the work I have
            been involved and walk through a few project code bases that I've built and architected.
          </div>

          <p style={{ color: 'lightblue' }}>
            <li><a href="https://github.com/crobinson42">https://github.com/crobinson42</a></li>
            <li><a href="https://github.com/crobinson42/react-skeleton-css">custom React CSS framework</a></li>
            <li><a href="https://github.com/crobinson42/job-pipe-client">React SPA in-progress side project</a></li>
            <li><a href="https://github.com/crobinson42/cra-react-project-template/tree/master/src">React project template</a></li>
          </p>
        </Slide>
      </Deck>
    );
  }
}
