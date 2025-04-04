  export const formatPrice = (price: number, currency: string = `$ `): string =>  `${currency}${price.toLocaleString('en-US')}`;
  export const formatArea = (areaSqFt: number): string => `${areaSqFt.toLocaleString('en-US')} sq ft`;
  export const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

  export const getSlugId = (slug: string, id: number | string) => `${slugify(slug)}-${id}`;

  export const loremIpsum = `Lorem ipsum dolor sit, amet consectetur adipisicing elit,Lorem ipsum dolor sit, amet consectetur adipisicing elit,Lorem ipsum dolor sit, amet consectetur adipisicing elit,Lorem ipsum dolor sit, amet consectetur adipisicing elit,Lorem ipsum dolor sit, amet consectetur adipisicing elit,Lorem ipsum dolor sit, amet consectetur adipisicing elit,`;
