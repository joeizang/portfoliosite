import { registerEnumType } from 'type-graphql';

export enum SkillLevel {
    Beginner = 'Beginner',
    Advanced_Beginner = 'Advanced Beginner',
    Competent = 'Competent',
    Proficient = 'Proficient',
    Expert = 'Expert',
}

export enum EmploymentType {
    Full_Time = 'Full Time',
    Part_Time = 'Part Time',
    Contract = 'Contract',
    Internship = 'Internship',
}

registerEnumType(SkillLevel, {
    name: 'SkillLevel',
});

registerEnumType(EmploymentType, {
    name: 'EmploymentType',
});
