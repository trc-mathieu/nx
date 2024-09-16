import type { ProjectNameAndRootFormat } from '@nx/devkit/src/generators/project-name-and-root-utils';
import type { Linter, LinterType } from '@nx/eslint';

export interface Schema {
  name: string;
  displayName?: string;
  style?: string;
  skipFormat: boolean; // default is false
  directory?: string;
  projectNameAndRootFormat?: ProjectNameAndRootFormat;
  tags?: string;
  unitTestRunner: 'jest' | 'none'; // default is jest
  pascalCaseFiles?: boolean;
  classComponent?: boolean;
  js: boolean; // default is false
  linter: Linter | LinterType; // default is eslint
  setParserOptionsProject?: boolean; // default is false
  e2eTestRunner: 'cypress' | 'playwright' | 'detox' | 'none'; // default is none
  standaloneConfig?: boolean;
  skipPackageJson?: boolean; // default is false
  addPlugin?: boolean;
  nxCloudId?: string;
}
