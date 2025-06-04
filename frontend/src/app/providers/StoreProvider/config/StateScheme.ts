import {apiService} from "shared/api/api";

export interface StateScheme {
    [apiService.reducerPath]: ReturnType<typeof apiService.reducer>
}