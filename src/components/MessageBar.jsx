import './MessageBar.css';

const MessageBar = ({ msg, type }) => {
  return (
    <div className={'messageBar ' + type}>
      <p>{msg}</p>
    </div>
  );
};

export default MessageBar;
