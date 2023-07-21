import z from 'zod'
import { ProcessForm } from '../Forms/ProcessForm';


export const CharacterizationFormSchema = z.object({

    // Date: z
    // .date({
    //     required_error: 'El campo es obligatorio',
    //     invalid_type_error: 'El campo es obligatorio'
    // }),
    
    Address: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),
    
    AffectedProcess: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^[A-Za-z]+$/),

    OfficialName: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/, 'Solo se permiten letras'),
    
    Post: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 50 caracteres')
    .regex(/^[A-Za-z]+$/, 'Solo se permiten letras'),

    Email: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(30, 'Solo puede escribir un limite de 30 caracteres'),
    

    DescriptionProblem: z
    .string()
    .min(1, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    ProcessProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    ReasonProblem: z.string().min(2, 'Campo obligatorio'),

    WhatProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres'),

    //Impact Type

    WhatImpact: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),


    OperationProcess: z
    .string()
    .min(2,'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

})

export type CharacterizationForm = z.infer<typeof CharacterizationFormSchema>

export const AnalysisFormSchema = z.object({

    GoalIndicator: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/, 'Debe ingresar un número valido'),

    IndicatorReal: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/, 'Debe ingresar un número valido'),

    Gap: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/, 'Debe ingresar un número valido'),

    PunctualProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    DescriptionProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/)
})

export type AnalysisForm = z.infer<typeof AnalysisFormSchema>

export const ProcessFormSchema = z.object({
    Address: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    AffectedProcess: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^[A-Za-z]+$/),

    DescriptionSolution: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    Resources: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    Collaborators: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),
    
    UpdatingProcesses: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    TechnologicalResources: z
    .string()
    .min(2, 'Este campo es obligatorio ')
    .max(10, 'Solo puede escribir un limite de 10 caracteres'),

    TechnologicalTools: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10,'Solo puede escribir un limite de 10 caracteres')
})

export type ProcessForm = z.infer<typeof ProcessFormSchema>


