import { ApiProperty } from '@nestjs/swagger';
export class CreatePersonDto {
  @ApiProperty()
  readonly name: String;
  @ApiProperty()
  readonly birth_year: string;
  @ApiProperty()
  readonly eye_color: string;
  @ApiProperty({ type: [String] })
  films: string[];
  @ApiProperty()
  readonly gender: string;
  @ApiProperty({ type: String })
  readonly hair_color: string;
  @ApiProperty({ type: Number })
  readonly height: Number;
  @ApiProperty({ type: String })
  readonly homeworld: string;
  @ApiProperty({ type: Number })
  readonly mass: number;
  @ApiProperty()
  readonly skin_color: string;
}
