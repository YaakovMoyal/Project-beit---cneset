import { PartialType } from '@nestjs/mapped-types';
import { CreateBeitCnesetDto } from './create-beit-cneset.dto';
import { UserIF } from 'src/mongoose/userIF';
import { TfilaIF } from 'src/mongoose/beitCnesetIF';

export class UpdateBeitCnesetDto extends PartialType(CreateBeitCnesetDto) {
  name: string;
  address: string;
  community: string;
  image: string;
  gabai: UserIF;
  tfilot: TfilaIF;
}
