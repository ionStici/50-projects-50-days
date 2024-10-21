import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './providers/uploads.service';
import { Upload } from './upload.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Upload])],
  controllers: [UploadsController],
  providers: [UploadsService, UploadToAwsProvider],
})
export class UploadsModule {}
