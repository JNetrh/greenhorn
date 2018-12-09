import moment from 'moment';

export const getLongDate = date => moment(date).format('Do MMMM YYYY');
export const getLongDateWithTime = date =>
  moment(date).format('Do MMMM YYYY HH:mm');
export const getFromNow = date => moment(date).fromNow();
