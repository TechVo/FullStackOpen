const Notification = ({ showNotification, errorNotificaiton, name }) => {
  const notificationStyle = {
    color: errorNotificaiton ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 10, 
  }

  const notificaiton = errorNotificaiton 
          ? `${name} no longer exists in the database!`
          : `Added ${name}`

  if (showNotification)
  {
    return (
      <div style={notificationStyle}>
        <p>{notificaiton}</p>
      </div>
    )
  }

  return
}

export default Notification