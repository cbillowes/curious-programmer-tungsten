export const subscribe = async (email) => {
  try {
    return await fetch('/.netlify/functions/request-subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).then((response) => {
      if (response.successful) {
        return {
          success: true,
          message:
            'Thank you for subscribing. You will receive a confirmation email shortly.',
        };
      } else {
        return {
          success: false,
          message:
            "We couldn't subscribe you at this time. Please try again later.",
        };
      }
    });
  } catch (e) {
    console.error(e);
    return 'Oops! Something went wrong. Please try again later.';
  }
};
