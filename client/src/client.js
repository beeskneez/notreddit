module.exports = {
  client: {
    getAllItems(url, success) {
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    },
    getCertainItems(url, success) {
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    },
    getOneItem(url, success) {
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    },
    createItem(url, data, success) {
      fetch(url, {
        method: 'POST',
        body: data ? JSON.stringify(data) : null,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    },
    updateItem(url, data, success) {
      fetch(url, {
        method: 'PUT',
        body: data ? JSON.stringify(data) : null,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    }
  }
};

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.error(error);
    throw error;
  }
};

const parseJSON = res => {
  return res.json();
};
