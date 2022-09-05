import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form action="" className="form">
    <input
      type="text"
      className="input"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);
export default Input;
