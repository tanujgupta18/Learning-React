function Notification({ hasNotification }) {
  return <>{hasNotification && <p>You have new messages!</p>}</>;
}

export default Notification;
