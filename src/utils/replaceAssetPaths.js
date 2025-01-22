import { readdir, readFile, writeFile } from 'fs/promises'
import { join, resolve } from 'path'

const contentDir = resolve('./src/content')
const searchPattern = /\/src\/images\//g
const replacement = '../../images/'

async function* walkDirectory(dir) {
  const dirEntries = await readdir(dir, { withFileTypes: true })
  for (const entry of dirEntries) {
    const entryPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkDirectory(entryPath)
    } else if (entry.name.endsWith('.md')) {
      yield entryPath
    }
  }
}

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8')
    if (content.match(searchPattern)) {
      const newContent = content.replace(searchPattern, replacement)
      await writeFile(filePath, newContent, 'utf-8')
      console.log(`✅ 已处理: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`❌ 处理文件失败 ${filePath}:`, error.message)
    return false
  }
}

async function main() {
  console.log('🔍 开始处理 Markdown 文件...')
  let processedCount = 0
  let errorCount = 0

  try {
    for await (const file of walkDirectory(contentDir)) {
      const success = await processFile(file)
      if (success) {
        processedCount++
      } else {
        errorCount++
      }
    }

    console.log('\n📝 处理结果汇总:')
    console.log(`- 成功处理文件数: ${processedCount}`)
    if (errorCount > 0) {
      console.log(`- 处理失败文件数: ${errorCount}`)
    }
  } catch (error) {
    console.error('💥 发生错误:', error.message)
    process.exit(1)
  }
}

main().catch(console.error)
