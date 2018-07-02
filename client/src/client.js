import axios from 'axios';

module.exports = {
  client: {
    getAllItems(url, success) {
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
    },
    getOneItem() {},
    createItem(url, query, success) {
      fetch(url, {
        body: JSON.stringify(query),
        headers: { Accept: 'application/json' }
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
