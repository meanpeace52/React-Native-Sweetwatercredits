#Notes on ReactNative

##### Notes taken on react native while doing the Udemy React-Native/Redux Course on Udemy

##Lifecycle Methods

Example of a lifecycle component. Notice, it is placed inside a component BEFORE the call to render().

```javascript
class App extends Component {
  componentWillMount() {
    // code here
    // this is an example of a lifecycle component
    // Any code in here will be rendered when the component itself is rendered
    // this is useful for configuration or loading data.
  }
  render() {
    return (
      <View>
        <Text>
          Hello World
        </Text>
      </View>
    )
  }
}
```

## State vs. Store(Redux)

#### State: The built in way of doing things in React Native

If you want to set state for a lifecycle of a component, you can use a lifecycle method defined inside of a component BEFORE the call to render().

```javascript
  state = { email: '', password: ''};
```

You can then access this state inside other lifecycle components by using ES6 de-structuring.

```javascript
  const { email, password } = this.state;
```

If you need to access the value as it changes, IE an input, you can do something like this inside a JSX Component:

```javascript
  <Button
    placeholder="example@example.com"
    label="Email"
    onChangeText={email => this.setState({ email })}
  />
```  

#### Store: The Redux/Flux way of doing things

##### GOLDEN RULE OF REDUX: nothing happens for free, we MUST implement it
One of the main ideas of redux is to move the logic out of the components and into reducers. Called by an action creator, a reducer updates the state with each user interaction - button press, input received, etc.

#####Redux-Thunk: A way to handle asynchronous and synchronous actions in redux
Redux thunk allows us to:  

* Bend the rules of action creators
* Return a function instead of an action. we can call the function with 'dispatch'


#### React Native Router Flux

#### Passing extra props to a route.


### Rule Violations

Rule Violation Rendering

* Render the main rule checking if the zone prop passed to the rule violation create form is core or non core.
* Then either render the main rule picker for core or the main rule picker for non core
* Repeat this process for any rules containing a sub-rule penalty


* Add shadows to buttons
