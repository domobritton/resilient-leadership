import { useState, useCallback } from 'react';
import { useNewsletterSignupContext } from './NewsletterSignupProvider';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const captchaFunctionUrl = '/.netlify/functions/captcha';
const DEFAULT_ERROR_MSG =
  'Your newsletter signup could not be saved. Please try again.';

export const useNewsLetterForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { setMessageSuccess } = useNewsletterSignupContext();
  const [values, setValues] = useState({
    email: '',
    firstName: '',
    optIn: false,
  });
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    message: DEFAULT_ERROR_MSG,
  });
  const [open, setOpen] = useState(true);
  const [expanded, setIsExpanded] = useState(false);

  const sendFormValues = useCallback(async () => {
    const { email, firstName, optIn } = values;
    const requestOptions = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.NEWSLETTER_API,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName,
          OPT_IN: optIn,
        },
        listIds: [3],
      }),
    };

    fetch(process.env.GATSBY_SENDINBLUE_URL, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res?.code) {
          setStatus({
            ...status,
            loading: false,
            error: true,
            message: res?.message || DEFAULT_ERROR_MSG,
          });
        } else {
          setMessageSuccess(true);
          setStatus({
            loading: false,
            error: false,
            message: DEFAULT_ERROR_MSG,
          });
          setValues({ email: '', firstName: '', optIn: false });
          setIsExpanded(false);
        }
      })
      .catch(() => {
        setStatus({ ...status, loading: false, error: true });
      });
  }, [setMessageSuccess, status, values]);

  const tokenValidate = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const responseToken = await executeRecaptcha('newsletter_signup');

    await fetch(captchaFunctionUrl, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(responseToken),
    })
      .then((res) => res.json())
      .then(({ msg, status }) => {
        if (status === 'success' && msg.isHuman) {
          sendFormValues();
        } else {
          setStatus({ ...status, loading: false, error: true });
        }
      })
      .catch(() => {
        setStatus({ ...status, loading: false, error: true });
      });
  }, [executeRecaptcha, sendFormValues, status]);

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setStatus({ ...status, loading: true });
    tokenValidate();
  };

  const handleChange = (e) => {
    if (e.target.name === 'optIn') {
      setValues({ ...values, [e.target.name]: !values.optIn });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleClose = () => setOpen((close) => !close);

  const handleExpand = () => setIsExpanded((expanded) => !expanded);

  return {
    onChange: handleChange,
    onClose: handleClose,
    onExpand: handleExpand,
    onSubmit: handleSubmit,
    expanded,
    open,
    status,
    values,
  };
};
