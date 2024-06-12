import {
  createPlateEditor,
  deserializeHtmlElement,
  htmlStringToDOMNode,
  normalizeDescendantsToDocumentFragment,
} from '@udecode/plate-common';
import { Value } from '@udecode/slate';

export const deserializeHtml = <V extends Value>(
  // editor: PlateEditor<V>,
  plugins: any,
  {
    element,
    collapseWhiteSpace = true,
  }: {
    element: HTMLElement | string;
    collapseWhiteSpace?: boolean;
  }
): any => {
  const editor = createPlateEditor({ plugins });

  // for serializer
  if (typeof element === 'string') {
    element = htmlStringToDOMNode(element);
  }

  // console.log('dsdsdsdsd', element);
  const fragment = deserializeHtmlElement(editor, element) as any[];

  return normalizeDescendantsToDocumentFragment(editor, {
    descendants: fragment,
  });
};
