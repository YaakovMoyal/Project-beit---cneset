// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { loginIF } from './interfaces/LoginIF';
// import { UpdateUserDto } from './dto/update-user.dto';

// interface UserReturnIF {
//   name: string;
//   email: string;
//   phone: string;
//   managementOf: string;
//   password: string;
//   _id: string;
// }

// const usersReturn: UserReturnIF[] = [];

// const userReturn: UserReturnIF = {
//   name: 'Callum Tate',
//   email: 'nostra.per@icloud.ca111111',
//   phone: '1-148-529-6728',
//   managementOf: 'string',
//   password: 'encryptedPassword',
//   _id: 'uuid',
// };

// const mockUser: CreateUserDto = {
//   name: 'Callum Tate',
//   email: 'nostra.per@icloud.ca111111',
//   phone: '1-148-529-6728',
//   managementOf: 'string',
//   password: 'password',
// };

// const mockUserLogin: loginIF = {
//   email: 'nostra.per@icloud.ca111111',
//   password: 'string',
// };

// const id = '1';

// describe('UsersController', () => {
//   let controller: UsersController;

//   const mockUserService = {
//     create: jest.fn((user: CreateUserDto) => {
//       return { ...user, password: 'encryptedPassword', _id: 'uuid' };
//     }),

//     login: jest.fn((user: loginIF) => {
//       return 'token';
//     }),

//     findAll: jest.fn(() => {
//       return usersReturn;
//     }),

//     findOne: jest.fn((id: string) => {
//       return userReturn;
//     }),

//     update: jest.fn((id: string, updateUserDto: UpdateUserDto) => {
//       return { id, ...updateUserDto };
//     }),

//     removeByID: jest.fn((id: string) => {
//       return `This action removes #${id} user`;
//     }),

//     removeAll: jest.fn(() => {
//       return `This action removes all users`;
//     }),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UsersController],
//       providers: [UsersService],
//     })
//       .overrideProvider(UsersService)
//       .useValue(mockUserService)
//       .compile();

//     controller = module.get<UsersController>(UsersController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('should create a new user', () => {
//     const newUser = controller.create(mockUser);
//     expect(newUser).toEqual(userReturn);
//     expect(mockUserService.create).toHaveBeenCalledWith(mockUser);
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../mongoose/userSchema';
import { CreateUserDto } from './dto/create-user.dto';

// interface UserReturnIF {
//   name: string;
//   email: string;
//   phone: string;
//   managementOf: string;
//   password: string;
//   _id: string;
//   __v: number;
// }

const mockUser: CreateUserDto = {
  name: '2',
  email: 'nostra.per@icloud.ca111111',
  phone: '1-148-529-6728',
  managementOf: 'string',
  password: 'password',
};

// const usersReturn: UserReturnIF[] = [];

const userReturn = {
  name: '2',
  managementOf: 'string',
  email: 'nostra.per@icloud.ca111111',
  password: '$2a$10$9W.bkHulrBW0mlRkSvuvge0G3yvjkSUvJcT9z1Ujkrb9aRj2wH9cq',
  phone: '1-148-529-6728',
  _id: ' new ObjectId 65a7c47ec1f94d53f5f1ebc1',
  __v: 0,
};

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          `mongodb+srv://kobi856m:208309856@cluster0.s44uek9.mongodb.net/testing-projectBeitCneset?retryWrites=true&w=majority`,
        ),
        MongooseModule.forFeature([{ name: 'user', schema: userSchema }]),
      ],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should updated a user', async () => {
    jest.spyOn(service, 'update').mockName('1');

    // const newUser =
    await service.update('65a7ccc80add287a1223bc4f', mockUser);

    expect(service.update).toHaveBeenCalledWith(
      '65a7ccc80add287a1223bc4f',
      mockUser,
    );
  });
});
