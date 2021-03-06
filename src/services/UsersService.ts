import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUser {
  email: string
}

class UsersService {

  private usersRepository : Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ email } : ICreateUser) {
    
    const userExists = await this.usersRepository.findOne({
      email
    })

    if(userExists) {
      throw new Error("User already exists!")
    }

    const  user = this.usersRepository.create({
      email
    });
    
    await this.usersRepository.save(user);
      
    return user;
  }
}

export {
  UsersService
}