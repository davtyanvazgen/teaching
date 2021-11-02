/**
 =========================
 Class Components
 =========================

 The component lifecycle has three phases:

 1. Mounting
 2. Updating
 3. Unmounting


 ===== MOUNTING =========================
 The mounting means to put elements into the DOM.
 React uses virtual DOM to put all the elements into the memory.

 1. constructor()
 2. getDerivedStateFromProps(nextProps, prevState)
 3. render()
 4. componentDidMount()

 constructor()
 --> constructor() method is called when the component is initiated and it’s the best place to initialize our state.

 getDerivedStateFromProps(nextProps, prevState)
 --> The getDerivedStateFromProps method is called right before rendering the element in our DOM.
     It takes props and state as an argument and returns an object with changes to the state.

 render()
 --> This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM.

 componentDidMount()
 --> The most common and widely used lifecycle method is componentDidMount. This method is called after the component is rendered.
     You can also use this method to call external data from the API.



 ===== UPDATING =========================
 This is the second phase of the React lifecycle.
 A component is updated when there is a change in state and props.

 1. getDerivedStateFromProps(nextProps, prevState)
 2. shouldComponentUpdate(nextProps, nextState)
 3. render()
 4. getSnapshotBeforeUpdate()
 5. componentDidUpdate(prevProps, prevState, snapshot)

 getDerivedStateFromProps(nextProps, prevState)
 --> The getDerivedStateFromProps method is called right before rendering the element in our DOM.
     It takes props and state as an argument and returns an object with changes to the state.

 shouldComponentUpdate(nextProps, nextState)
 --> This lifecycle method is used when you want your state or props to update or not.
     This method returns a boolean value that specifies whether rendering should be done or not.
     The default value is true.

 render()
 --> This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM.

 getSnapshotBeforeUpdate()
 --> This method is called right before updating the DOM. It has access to props and state before the update.
     Here you can check what was the value of your props or state before its update. So let see how it works.
     This method is useful if you want to keep sync in-between state of current DOM with the updated DOM.
     E.g. scroll position, audio/video, text-selection, cursor position, tool-tip position, etc.
     ==> Note: componentDidUpdate() should be included otherwise you will get an error.

 componentDidUpdate(prevProps, prevState)
 --> The componentDidUpdate method is called after the component is updated in the DOM.
     This is the best place in updating the DOM in response to the change of props and state.



 ===== UNMOUNTING =========================
 The final or the end of the react lifecycle is Unmounting.
 This is used when a component is removed from the DOM.

 1. componentWillUnmount()

 componentWillUnmount()
 --> If there are any cleanup actions like canceling API calls or clearing any caches in storage you
     can perform that in the componentWillUnmount method. You cannot use setState inside this method
     as the component will never be re-rendered.



 =================================================================
 ===== The methods that are deprecated are as follows =====

 1. componentWillMount
 --> All the legacy use cases are covered in the constructor. This is renamed as UNSAFE_componentWillMount.

 2. componentWillReceiveProps
 --> The new static method getDerivedStateFromProps is safe rewrite for this method and covers all the use
     cases of componentWillReceiveProps. The new name for this method is UNSAFE_componentWillReceiveProps.

 3. componentWillUpdate
 --> The new method getSnapshotBeforeUpdate is safe rewrite for this method and covers all the use cases of componentWillUpdate.
     The new name for this method is UNSAFE_componentWillUpdate.





 * */