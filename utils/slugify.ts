export const slugify = (text: string): string => {
    return text
      .toLowerCase()                       // Convert to lowercase
      .normalize('NFD')                    // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, '')     // Remove diacritical marks
      .replace(/[^a-z0-9 ]/g, '')          // Remove invalid characters
      .replace(/\s+/g, '-')                // Replace spaces with dashes
      .replace(/-+/g, '-')                 // Replace multiple dashes with one
      .replace(/^-|-$/g, '')               // Trim dashes from start and end
  }

