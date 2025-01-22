import type { ImageMetadata } from 'astro'

// 导入所有图片
const images = import.meta.glob<{ default: ImageMetadata }>('/src/images/**/*.{jpeg,jpg,png,gif,webp,avif}')

export async function getImage(imagePath: string) {
  if (!imagePath) {
    return null
  }

  // 如果路径以 /src 开头，移除它
  const normalizedPath = imagePath.startsWith('/src') ? imagePath : `/src${imagePath}`

  // 尝试获取图片
  if (normalizedPath in images) {
    const image = await images[normalizedPath]()
    return image.default
  }

  console.warn(`Image not found: ${normalizedPath}`)
  return null
}
