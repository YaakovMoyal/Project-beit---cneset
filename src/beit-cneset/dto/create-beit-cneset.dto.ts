import { IsNotEmpty } from 'class-validator';
import { TfilaIF } from 'src/mongoose/beitCnesetIF';
import { UserIF } from 'src/mongoose/userIF';

export class CreateBeitCnesetDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() address: string;
  @IsNotEmpty() URLaddress: string;
  @IsNotEmpty() community: string;
  @IsNotEmpty() image: string;
  @IsNotEmpty() gabai: UserIF;
  @IsNotEmpty() tfilot: TfilaIF;
}
