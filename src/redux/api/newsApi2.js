import { api } from "./baseApi";


export const newsApi2 = api.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `/news`,
    }),
    deleteNews: builder.mutation({
      query: (id) => {
        return {
          url: `/news/${id}`,
          method: "DELETE"
        }
      }
    }),
  }),
});

export const { useGetNewsQuery,
  useDeleteNewsMutation
} = newsApi2;


