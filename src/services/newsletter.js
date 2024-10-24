export const subscribe = async (email) => {
  try {
    return await fetch('/.netlify/functions/request-subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).then((response) => {
      if (response.successful) {
        return 'Thank you for subscribing. You will receive a confirmation email shortly.';
      } else {
        return 'Thank you for subscribing.';
      }
    });
  } catch (e) {
    console.error(e);
    return 'Oops! Something went wrong. Please try again later.';
  }
};
