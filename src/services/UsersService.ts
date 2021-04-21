import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUser {
  email: string
}

class UsersService {
  async create({ email } : ICreateUser) {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const userExists = await usersRepository.findOne({
      email
    })

    if(userExists) {
      throw new Error("User already exists!")
    }

    const  user = usersRepository.create({
      email
    });
    
    await usersRepository.save(user);
      
    return user;
  }
}

export {
  UsersService
}