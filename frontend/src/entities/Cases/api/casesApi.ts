import {apiService} from "shared/api/api";
import {Case, CasesBlockModel} from "entities/Cases/model/cases";
import {BaseQueryArg} from "@reduxjs/toolkit/query";

interface CasesBlockPageParam {
    pageNumber: number;
    pageSize: number;
}
interface ProjectsResponse {
    projects: Case[]
    totalPages: number
}
export const casesApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        // getCasesBlock: builder.query<CasesBlockModel, string>({
        //     query: (slug) => `cases/getCasesBlock/${slug}`,
        // }),
        getCasesBlockByServicePage: builder.infiniteQuery<ProjectsResponse, string, CasesBlockPageParam>({
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
                return `cases/getCasesBlock/${queryArg}?pageNumber=${pageNumber}&pageSize=${pageSize}`
            },
        })
    })
})