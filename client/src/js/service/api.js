const $ = window.$;

export default {
  postVotes: (data) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: "POST",
        url: "/app/api/vote",
        data,
      }).done((res) => {
        resolve(res);
      }).fail((err) => {
        reject(err);
      });
    })
  }
};
