import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  name: string;

  @ApiProperty({
    example: 'my-blog-post',
    description: "For example - 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url".',
  })
  slug: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsJSON()
  schema?: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;
}
