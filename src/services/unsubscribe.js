export const unsubscribe = async (email) => {
  try {
    return await fetch('/.netlify/functions/request-unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).then((response) => {
      if (response.successful) {
        return {
          success: true,
          message:
            'Sorry to see you go. You will receive a confirmation email shortly.',
        };
      } else {
        return {
          success: false,
          message:
            'You cannot be unsubscribed at this time. Please try again later. If problems persist, please reach out so that we can manually intervene.',
        };
      }
    });
  } catch (e) {
    console.error(e);
    return 'Oops! Something went wrong. Please try again later.';
  }
};
