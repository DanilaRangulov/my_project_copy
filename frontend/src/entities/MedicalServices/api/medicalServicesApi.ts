import {apiService} from "shared/api/api";
import {MedicalServices} from "entities/MedicalServices/model/medicalServices";

export const medicalServicesApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalServices: builder.query<MedicalServices[], void>({
            query: () => '/services/getAllServiceItems',
        }),
    })
})