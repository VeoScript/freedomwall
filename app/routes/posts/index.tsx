import DefaultLayout from '~/layouts/Default'
import Card from '~/components/Card'
import { validateName, validateTitle, validateContent } from '~/modules/form-errors'
import { GetPosts, CreatePost } from '~/modules/mutations'
import { PrismaClient } from '@prisma/client'
import { LoaderFunction, ActionFunction, useLoaderData, redirect, json } from 'remix'

export const loader: LoaderFunction = async () => {
  const prisma = new PrismaClient()

  const posts = await GetPosts(prisma)

  return json({
    posts
  })
}

export const action: ActionFunction = async ({ request }) => {
  const prisma = new PrismaClient()

  const formData = await request.formData()
  const _action = formData.get('_action') as string

  let formErrors = {
    name: validateName(formData.get('name') as string),
    title: validateTitle(formData.get('title') as string),
    content: validateContent(formData.get('content') as string)
  }

  if (_action === 'create_post') {
    if (Object.values(formErrors).some(Boolean)) return { formErrors }
    CreatePost(prisma, formData)
  }
  
  return redirect('/posts')
}

const Posts = () => {
  const { posts } = useLoaderData()  
  return (
    <DefaultLayout>
      {posts.map((post: {id: string, counter: number, name: string, title: string, content: string, date: string}) => (
        <Card
          key={post.counter}
          post={post}
        />
      ))}
    </DefaultLayout>
  )
}

export default Posts