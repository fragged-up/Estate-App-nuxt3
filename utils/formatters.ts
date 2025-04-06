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

  export function formatSelectedProperty(propertyItemId?: { slug: string; location: string }): string | undefined {
    if (!propertyItemId) return;

    const { slug, location } = propertyItemId;
    return `${slug.replace('-', ' ')}, ${location}`;
  }

  export function extractIdFromSlug(slugId: string): number {
    const idPart = slugId.split('-').pop();
    const id = Number(idPart);
    if (isNaN(id)) throw new Error('Invalid slugId format');
    return id;
  }
