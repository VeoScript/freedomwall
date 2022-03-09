// Customized Module for Request Functions

export const GetPosts = async (prisma: any) => {
  async function main() {
    const posts = await prisma.posts.findMany({
      orderBy: [{
        counter: 'desc'
      }],
      select: {
        id: true,
        counter: true,
        name: true,
        title: true,
        content: true,
        date: true
      }
    })
    return posts
  }

  return main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}

export const CreatePost = async (prisma: any, formData: any) => {
  const name = formData.get('name') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const date = String(new Date())

  async function main() {
    await prisma.posts.create({
      data: {
        name: name,
        title: title,
        content: content,
        date: date
      }
    })
  }

  await main() 
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}