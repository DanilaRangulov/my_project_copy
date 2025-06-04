import {Doctor} from "entities/Doctor";
export interface CasesBody {
    body: Case[];
}
export interface CasesBlockModel {
    id: number;
    component: 'CasesBlock';
    body: Case[];
}
export interface Case {
    id: number;
    title: string;
    duration: number;
    modalContent: CaseModalContent;
    // doctor: Doctor;
}
export interface CaseModalContent {
    description: string;
    diagnosis: string;
    doctor: Doctor;
}
