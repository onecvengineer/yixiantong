const axios = require('axios'),
  qs = require('qs');

class HTTP {
  axiosPost(option) {
    axios({
      url: option.url,
      method: 'post',
      header: { 'Content-Type': 'application/x-www-form-urlencode' },
      data: qs.stringify(option.data),
    })
      .then(res => {
        option.scuccess(res);
      })
      .catch(err => {
        option.fail(err);
      });
  }
}

export default HTTP;
