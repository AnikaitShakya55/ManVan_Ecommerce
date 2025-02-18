// Notification.js
import React from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  } else if (props.status === 'success') {
    specialClasses = classes.success;
  }
  else if(props.status === 'fetched'){
    specialClasses = classes.fetched
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2 className={specialClasses}>{props.title}</h2>
      <p className={specialClasses}>{props.message}</p>
    </section>
  );
};

export default Notification;
