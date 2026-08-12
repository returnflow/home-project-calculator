import { buildMetadata } from '@/lib/seo/metadata'

export function createMaterialMetadata(config: {
  title: string
  description: string
  path: string
}) {
  return buildMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
  })
}