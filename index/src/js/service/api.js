const $ = window.$;

export const postVotes = (voteOptions) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "POST",
      url: "/app/api/vote",
      data: {
        votes: voteOptions
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
