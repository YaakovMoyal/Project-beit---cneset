import { Test, TestingModule } from '@nestjs/testing';
import { BeitCnesetService } from './beit-cneset.service';

describe('BeitCnesetService', () => {
  let service: BeitCnesetService;
  const mockBeitCnesetService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeitCnesetService],
    })
      .overrideProvider(BeitCnesetService)
      .useValue(mockBeitCnesetService)
      .compile();

    service = module.get<BeitCnesetService>(BeitCnesetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
