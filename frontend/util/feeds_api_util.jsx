export const fetchFeeds = () => (
  $.ajax({
    method: 'GET',
    url: "https://newsapi.org/v1/sources?language=en" +
          "&apiKey=f32df2380d74401aadbe6fce2277807b"
  })
);