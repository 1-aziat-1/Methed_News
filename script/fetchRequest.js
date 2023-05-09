const URL = ``;

const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  headers,
  body,
  counter,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${postfix}`, options);
    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data, counter);
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  }catch (err) {
    return callback(err);
  }
};

export default fetchRequest;