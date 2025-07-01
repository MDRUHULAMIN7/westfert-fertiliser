import { api } from "./baseApi";


export const newsApi2 = api.injectEndpoints({
  endpoints: (builder) => ({
    // get news
    // get news
    getNews: builder.query({
      query: (searchTerm = '') => {
        return {
          url: `/news`,
          params: searchTerm ? { search: searchTerm } : {},
        };
      },
    }),

    // get news by id
    getNewsById: builder.query({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'GET',
      }),
    }),

    // delete news
    deleteNews: builder.mutation({
      query: (id) => {
        return {
          url: `/news/${id}`,
          method: "DELETE"
        }
      }
    }),

    // add news

    createNews: builder.mutation({
      query: (payloadData) => ({
        url: '/news',
        method: 'POST',
        body: payloadData,
      }),
    }),

    // edit news
    editNews: builder.mutation({
      query: ({ id, payloadData }) => ({
        url: `/news/${id}`,
        method: 'PATCH',
        body: payloadData,
      }),



    }),


  }),

});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useDeleteNewsMutation,
  useCreateNewsMutation,
  useEditNewsMutation
} = newsApi2;
