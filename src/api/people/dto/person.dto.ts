import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
export class PersonDto {
  @ApiProperty()
  @Expose()
  readonly name: String;
  @ApiProperty()
  @Expose()
  readonly birth_year: string;
  @ApiProperty()
  @Expose()
  readonly eye_color: string;
  @ApiProperty({ type: [String] })
  films: string[];
  @ApiProperty()
  @Expose()
  readonly gender: string;
  @ApiProperty({ type: String })
  @Expose()
  readonly hair_color: string;
  @ApiProperty({ type: Number })
  @Expose()
  readonly height: Number;
  @ApiProperty({ type: String })
  @Expose()
  readonly homeworld: string;
  @ApiProperty({ type: Number })
  @Expose()
  readonly mass: number;
  @ApiProperty()
  @Expose()
  readonly skin_color: string;
}
