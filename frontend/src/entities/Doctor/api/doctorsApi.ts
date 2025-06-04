import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Doctor, DoctorsBlockModel} from "entities/Doctor/model/doctor";
import {apiService} from "shared/api/api";
import {Case} from "entities/Cases";

// export const doctorsApi = createApi({
//     reducerPath: 'doctorsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
//     endpoints: (builder) => ({
//         getDoctors: builder.query<Doctor[], void>({
//             query: () => `doctors`,
//         }),
//     }),
// });
interface DoctorBlockPageParam {
    pageNumber: number;
    pageSize: number;
}
interface ProjectsResponse {
    projects: Doctor[]
    totalPages: number
}
export const doctorsApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getDoctors: builder.query<Doctor[], void>({
            query: () => 'doctors',
        }),
        getDoctorsBlock: builder.query<DoctorsBlockModel, string>({
            query: (slug) => `doctors/getDoctorsBlock/${slug}`,
        }),
        getDoctorsBlockByServicePage: builder.infiniteQuery<ProjectsResponse, string, DoctorBlockPageParam>({
            infiniteQueryOptions: {
                initialPageParam: {
                    pageNumber: 1,
                    pageSize: 6
                },
                getNextPageParam: (
                    lastPage,
                    allPages,
                    lastPageParam,
                    allPageParams,
                ) => {
                    const nextPage = lastPageParam.pageNumber + 1
                    // const remainingPages = lastPage?.totalPages - nextPage
                    if (lastPageParam.pageNumber >= lastPage?.totalPages) {
                        return undefined
                    }

                    return {
                        ...lastPageParam,
                        pageNumber: nextPage,
                    }
                },
                getPreviousPageParam: (
                    firstPage,
                    allPages,
                    firstPageParam,
                    allPageParams,
                ) => {
                    const prevPage = firstPageParam.pageNumber - 1
                    if (prevPage < 0) return undefined

                    return {
                        ...firstPageParam,
                        pageNumber: prevPage,
                    }
                },
            },
            query({ queryArg, pageParam }) {
                const {pageNumber, pageSize} = pageParam
                return `doctors/getDoctorsBlockByServiceItem/${queryArg}?pageNumber=${pageNumber}&pageSize=${pageSize}`
            },
        })
    })
})