import { api } from "./baseApi";


export const newsApi2 = api.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `/news`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi2;


