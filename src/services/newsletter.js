export const subscribe = async ({ email, referrer }) => {
  try {
    return await fetch('/.netlify/functions/request-subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, referrer }),
    }).then((response) => {
      if (response.status === 200) {
        return {
          success: true,
          message:
            'Thank you for subscribing. You will receive a confirmation email shortly.',
        };
      }
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
      };
    });
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again later.',
    };
  }
};
