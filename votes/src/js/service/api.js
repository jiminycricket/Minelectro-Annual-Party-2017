const $ = window.$;

export const postVotes = (id, votes) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "POST",
      url: "/app/api/vote",
      data: {
        id,
        votes,
      },
    }).done((res) => {
      resolve(res);
    }).fail((err) => {
      reject(err);
    });
  })
}

export default {
  postVotes
};
