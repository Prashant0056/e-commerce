import Boom from '@hapi/boom'
import prisma from '../util/prisma'

export const addCategory = async (id: number, name: string) => {
    try {
        return await prisma.productCategory.create({
            data: {
                id: id,
                category_name: name,
            },
            select: {
                id: true,
                category_name: true,
            },
        })
    } catch (err) {
        throw Boom.unauthorized('Something went wrong')
    }
}
