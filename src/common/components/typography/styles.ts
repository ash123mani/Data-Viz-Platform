import { css } from 'styled-components';

type TypographyVariant =
    | 'headingLg'
    | 'headingMd'
    | 'subheading'
    | 'bodyMd'
    | 'bodyMdTight'
    | 'bodySm'
    | 'bodyXs'
    | 'caption'
    | 'label'
    | 'labelAlt'
    | 'title';

export interface TypographyProps {
    variant: TypographyVariant;
}

export const variantStyles = {
  headingLg: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
  `,
  headingMd: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
  `,
  subheading: css`
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -2.3%;
  `,
  bodyMd: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  `,
  bodyMdTight: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -2.3%;
  `,
  bodySm: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -4%;
  `,
  bodyXs: css`
    font-weight: 500;
    font-size: 12.25px;
    line-height: 150%;
    letter-spacing: -2.3%;
  `,
  caption: css`
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
  `,
  label: css`
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -2%;
  `,
  labelAlt: css`
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
  `,
  title: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: -2.3%;
  `,
};


