const KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTgxZDVhMzdhYzNiYTJiYWYyODVkYjc3NTQ5ZTFjNCIsInN1YiI6IjY2M2E2ZDgzZjAzNDZjNWNjNzhlODQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qF3BfcsQtIrpouVZ22iDDIZ6zDz317CynXEODwHd1KE";

export const optionsReq = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: KEY,
  },
};

export const searchQueryInit = {
  active_page: 1,
  genres: [{ id: null, name: "" }],
  release_date: "",
  rating: { min: "", max: "" },
  sort_by: "",
};
