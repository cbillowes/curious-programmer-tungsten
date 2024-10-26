export const unsubscribe = async ({ email, message }) => {
  try {
    return await fetch('/.netlify/functions/request-unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email, message }),
    }).then((response) => {
      if (response.status === 200) {
        return {
          success: true,
          message:
            'Sorry to see you go. You will receive a confirmation email shortly.',
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
