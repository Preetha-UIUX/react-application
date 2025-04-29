import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getFeedback: builder.query({
            query: () => "posts",
            providesTags: ['Feedback']
        }),

        addFeedback: builder.mutation({
            query: (newFeedback) => ({
                url: 'posts',
                method: 'POST',
                body: newFeedback
            }),
            invalidatesTags: ['Feedback']
        }),

        deleteFeedback: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Feedback']
        }),

        updateFeedback: builder.mutation({
            query: ({id, updateFeedback}) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: updateFeedback
            }),
            invalidatesTags: ['Feedback']
        })
    })
})

export const { useGetFeedbackQuery, useAddFeedbackMutation, useDeleteFeedbackMutation, useUpdateFeedbackMutation } = feedbackApi