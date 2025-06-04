export interface Doctor {
    id?: number;
    name: string;
    specialty: string;
    experience: number;
    countOfReviews: number;
    imageUrl: any;
}
export interface DoctorsBlockModel {
    id: string;
    component: 'DoctorsBlock';
    body: Doctor[];
}