import { nanoid } from "nanoid";

const questions = [
  {
    text: "In React what is used to pass data to a component from outside??",
    options: [
      { id: nanoid(), text: "setState", isCorrect: false },
      { id: nanoid(), text: "render with arguments", isCorrect: false },
      { id: nanoid(), text: "props", isCorrect: true },
      { id: nanoid(), text: "PropTypes", isCorrect: false },
    ],
  },
  {
    text: "Which of the following API is a MUST for every ReactJS component?",
    options: [
      { id: nanoid(), text: "getInitialState", isCorrect: false },
      { id: nanoid(), text: "render()", isCorrect: true },
      { id: nanoid(), text: "renderComponent", isCorrect: false },
      { id: nanoid(), text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is a good use case for using a function while rendering a dynamic list of items?",
    options: [
      {
        id: nanoid(),
        text: "To compute a value",
        isCorrect: true,
      },
      {
        id: nanoid(),
        text: "Functions should not be used for dynamic lists",
        isCorrect: false,
      },
      { id: nanoid(), text: "To make the code shorter", isCorrect: false },
      { id: nanoid(), text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "Which method is not part of ReactDOM?",
    options: [
      { id: nanoid(), text: "ReactDOM.destroy()", isCorrect: false },
      { id: nanoid(), text: "ReactDOM.hydrate()", isCorrect: true },
      { id: nanoid(), text: "ReactDOM.createPortal()", isCorrect: false },
      { id: nanoid(), text: "ReactDOM.findDOMNode()", isCorrect: false },
    ],
  },
  {
    text: " Which of the following is correct syntax for a button click event handler, foo?",
    options: [
      { id: nanoid(), text: "<button onclick=this.foo()>", isCorrect: false },
      { id: nanoid(), text: "<button onclick=this.foo>", isCorrect: false },
      { id: nanoid(), text: "<button onClick={this.foo()}>", isCorrect: true },
      { id: nanoid(), text: "<button onClick={foo}>", isCorrect: false },
    ],
  },
  {
    text: "What is a controlled input element?",
    options: [
      {
        id: nanoid(),
        text: "An input element with the controlled flag",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "An element whose controlled by a component’s state",
        isCorrect: true,
      },
      {
        id: nanoid(),
        text: "An input element that accept a list of characters",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "The value of another input element",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How do you write an inline style specifying the font-size:12px and color:red; in JSX?",
    options: [
      {
        id: nanoid(),
        text: "style={{font-size:12,color:'red'}}",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "style={{fontSize:'12px',color:'red'}}",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "style={fontSize:'12px',color:'red'}",
        isCorrect: true,
      },
      {
        id: nanoid(),
        text: "style={{font-size:12px,color:'red'}}",
        isCorrect: false,
      },
    ],
  },
  {
    text: "At the highest level, React components have lifecycle events that fall into?",
    options: [
      { id: nanoid(), text: "Initialization", isCorrect: false },
      {
        id: nanoid(),
        text: "State/Property Updates",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "Destruction",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "All of these",
        isCorrect: true,
      },
    ],
  },
  {
    text: "How many elements does a react component return?",
    options: [
      { id: nanoid(), text: "Elements", isCorrect: false },
      {
        id: nanoid(),
        text: "Element",
        isCorrect: true,
      },
      {
        id: nanoid(),
        text: "Multiple Elements",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "None of these",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Everything in react is?",
    options: [
      { id: nanoid(), text: "Component", isCorrect: true },
      {
        id: nanoid(),
        text: "Model",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "Method",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "Package",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What function allows you to render React content in an HTML page?",
    options: [
      { id: nanoid(), text: "React.mount()", isCorrect: false },
      {
        id: nanoid(),
        text: "ReactDOM.start()",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "ReactDOM.render()",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "React.render()",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What function can be used to update state?",
    options: [
      { id: nanoid(), text: "setState()", isCorrect: true },
      {
        id: nanoid(),
        text: "updateState()",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "upState()",
        isCorrect: false,
      },
      {
        id: nanoid(),
        text: "downState()",
        isCorrect: true,
      },
    ],
  },
];

export default questions;
