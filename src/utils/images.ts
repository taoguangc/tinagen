import { getImage } from 'astro:assets'

// 使用具名导出而不是默认导出
export const resolveImagePath = async (imagePath: string) => {
  if (!imagePath) return null

  try {
    const normalizedPath = imagePath.startsWith('/src/') ? imagePath.substring(4) : imagePath

    const imageModule = await import(`../images/${normalizedPath}`)
    return imageModule.default
  } catch (error) {
    console.error(`Error loading image: ${imagePath}`, error)
    return null
  }
}
