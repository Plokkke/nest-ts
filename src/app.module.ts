import fs from 'fs';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import yaml from 'js-yaml';

import { Config } from '@/config';
export function loadYaml(path: string): unknown {
  return yaml.load(fs.readFileSync(path, 'utf8'));
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        () =>
          loadYaml(
            join(__dirname, '../configuration/index.yaml'),
          ) as Config,
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
