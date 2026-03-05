1. What is JSX, and why is it used?
Answer: JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup language directly within their JavaScript code. It provides several advantages like Readability, combining logic and markup and improved safety etc.

2. What is the difference between State and Props?
Answer: Props are read-only data passed down from a parent to a child component, whereas state is managed internally within a component which is mutable, and causes re-renders when updated.

3. What is the useState hook, and how does it work?
Answer: The useState hook that allows functional components to manage local, component-specific state. State is memory that a component can use to remember data across re-renders, such as user input, toggles etc.

4. How can you share state between components in React?
Answer: State can be shared between components using lifting up method where the state is moved from the child components to their closest parent component. The parent then passes the state down to the children via props which allow children to update the state.

5. How is event handling done in React?
Answer: To add an event handler, first we need to define a function and then pass it as a prop to the appropriate tag.