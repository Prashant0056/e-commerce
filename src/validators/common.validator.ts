import { z } from 'zod'

export const userAddressValidator = z
    .object({
        id: z.number().optional(),

        address_line1: z.string({
            required_error: 'address_line1 1 is required',
        }),
        street_number: z.string({
            required_error: 'street_number is required',
        }),

        address_line2: z.string().optional(),

        city: z.string({ required_error: 'city is required' }),

        region: z.string({ required_error: 'region is required' }),
    })
    .array()
    .optional()
