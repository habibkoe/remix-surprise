import { prisma } from "./prisma.server";
import type { RegisterForm } from "./types.server";

import bcrypt from 'bcryptjs'

export const createUser =async (user:RegisterForm) => {
    
    const passwordHash = await bcrypt.hash(user.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            fullName: user.fullName,
            phone: user.phone,
            password: passwordHash
        }
    })

    return {id: newUser.id, email: user.email}
}