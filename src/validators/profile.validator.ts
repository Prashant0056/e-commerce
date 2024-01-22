import { z } from 'zod'
import { userAddressValidator } from './common.validator'

export const updateUserBodyDTO = z
    .object({
        email: z
            .string({
                required_error: 'Email is required',
            })
            .email('Should be a valid email address'),
        password: z.string({
            required_error: 'Password is required',
        }),
        // Sometimes you may want custom validators, like this in case
        phone_number: z.string().optional(),
        addresses: userAddressValidator,
        is_admin: z.boolean().optional(),
    })
    .strict()

export const updateUserDTO = z.object({
    body: updateUserBodyDTO,
})
