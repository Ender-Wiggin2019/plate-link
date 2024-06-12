import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { PlateElement, useElement } from '@udecode/plate-common';
import { TLinkElement, useLink } from '@udecode/plate-link';

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

export const LinkElement = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    const element = useElement<TLinkElement>();
    // const tooltipContent = element.url.split('----')[1];
    // element.url = element.url.split('----')[0];
    const { props: linkProps } = useLink({ element });
    console.log(element, props, linkProps);
    const tooltipContent = (props.element.url as any).split('----')[1];
    // (props.element.url as any) = (props.element.url as any).split('----')[0];

    (linkProps.href as any) = (linkProps.href as any).split('----')[0];

    // if (!props['aria-valuetext']) {
    //   props['aria-valuetext'] = tooltipContent;
    // }

    return (
      <Tooltip>
        <TooltipTrigger>
          {' '}
          <PlateElement
            ref={ref}
            asChild
            className={cn(
              'font-medium text-primary underline decoration-primary underline-offset-4',
              className
            )}
            {...(linkProps as any)}
            {...props}
          >
            <a>{children}</a>
          </PlateElement>
        </TooltipTrigger>
        <TooltipContent>{props['aria-valuetext'] ?? tooltipContent}</TooltipContent>
      </Tooltip>
    );
  }
);

// import React from 'react';
// import { cn, withRef } from '@udecode/cn';
// import { PlateElement, useElement } from '@udecode/plate-common';
// import { TLinkElement, useLink } from '@udecode/plate-link';

// import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

// export const LinkElement = withRef<typeof PlateElement>(
//   ({ className, children, ...props }, ref) => {
//     const element = useElement<TLinkElement>();
//     const { props: linkProps } = useLink({ element });

//     return (
//       <PlateElement
//         ref={ref}
//         asChild
//         className={cn(
//           'font-medium text-primary underline decoration-primary underline-offset-4',
//           className
//         )}
//         {...(linkProps as any)}
//         {...props}
//         // <a>
//       >
//         {' '}
//         {/* <Tooltip>
//           <TooltipTrigger>{children}</TooltipTrigger>
//           <TooltipContent>1111</TooltipContent>
//         </Tooltip> */}
//         {/* </a> */}
//         <a>{children}</a>
//       </PlateElement>
//     );
//   }
// );
