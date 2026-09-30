export type Artifact = {
  id: string
  foundAt: string
  note?: string
}

export const createArtifact = (note?: string): Artifact => ({
  id: Math.random().toString(36).slice(2, 10),
  foundAt: new Date().toISOString(),
  note,
})

export const isArtifact = (value: unknown): value is Artifact => {
  if (typeof value !== 'object' || value === null) return false
  const artifact = value as Partial<Artifact>
  return typeof artifact.id === 'string' && typeof artifact.foundAt === 'string'
}
