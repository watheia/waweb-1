import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { Theme } from '@waweb/base-ui.theme.theme-provider';
import { WaReactAspect } from './wa-react.aspect';

import '@waweb/base-ui.theme.styles/dist/index.css';

export class WaReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const previewMain = new WaReactPreviewMain();
    // register a new provider to wrap all compositions
    // using our custom theme.
    react.registerProvider([Theme]);
    return previewMain;
  }
}

WaReactAspect.addRuntime(WaReactPreviewMain);
