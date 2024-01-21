import { Test, TestingModule } from '@nestjs/testing';
import { BeitCnesetController } from './beit-cneset.controller';
import { BeitCnesetService } from './beit-cneset.service';

describe('BeitCnesetController', () => {
  let controller: BeitCnesetController;

  const mockBeitCnesetService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeitCnesetController],
      providers: [BeitCnesetService],
    })
      .overrideProvider(BeitCnesetService)
      .useValue(mockBeitCnesetService)
      .compile();

    controller = module.get<BeitCnesetController>(BeitCnesetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
