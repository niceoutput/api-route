import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your email adress</label>
          <input ref={emailInputRef} type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <textarea ref={feedbackInputRef} id='feedback' rows='5'></textarea>
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
