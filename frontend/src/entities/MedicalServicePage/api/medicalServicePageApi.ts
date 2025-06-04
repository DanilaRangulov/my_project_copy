import {apiService} from "shared/api/api";
import {MedicalServicePage} from "entities/MedicalServicePage/model/medicalServicePage";


export const medicalServicePageApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalServiceByItem: builder.query<MedicalServicePage, string>({
            query: (itemId) => `/services/getServicePageByItem/${itemId}`,
        }),
    })
})