export const fetchSavedArticles = () => (
  $.ajax({
    method: 'GET',
    url: 'api/articles'
  })
);

export const saveArticle = article => (
  $.ajax({
    method: 'POST',
    url: 'api/articles',
    data: {article}
  })
);

export const removeArticle = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/articles/${id}`
  })
);
