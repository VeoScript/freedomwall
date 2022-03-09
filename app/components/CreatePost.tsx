import React from 'react'
import { useTransition, useActionData, Form } from 'remix'

const CreatePost = () => {
  const actionData = useActionData()
  const transition = useTransition()
  const isCreating = transition.state === 'submitting' && transition.submission.formData.get('_action') === 'create_post'

  const formRef = React.useRef<any>()

  React.useEffect(() => {
    if (actionData?.formErrors?.name) {
      return
    } else if (actionData?.formErrors?.title) {
      return
    } else if (actionData?.formErrors?.content) {
      return
    } else {
      if (!isCreating) {
        formRef.current?.reset()
      }
    }
  }, [isCreating, actionData])

  return (
    <Form ref={formRef} method="post">
      <div className="flex flex-col w-full space-y-2">
        <div className="flex items-center w-full mb-10">
          <h3 className="title">Create Post</h3>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="name">Anonymous Name</label>
          <input className="inline-flex items-center rounded-md p-4 outline-none border border-blue-400 focus:border-blue-800" type="text" name="name" id="name" />
          {actionData?.formErrors?.name ? (
            <p className="font-light text-xs text-red-500">{actionData?.formErrors?.name}</p>
          ) : null}
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="title">Title</label>
          <input className="inline-flex items-center rounded-md p-4 outline-none border border-blue-400 focus:border-blue-800" type="text" name="title" id="title" />
          {actionData?.formErrors?.title ? (
            <p className="font-light text-xs text-red-500">{actionData?.formErrors?.title}</p>
          ) : null}
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="content">Content</label>
          <textarea className="inline-flex items-center rounded-md p-4 outline-none resize-none border border-blue-400 focus:border-blue-800" rows={5} name="content" id="content" />
          {actionData?.formErrors?.content ? (
            <p className="font-light text-xs text-red-500">{actionData?.formErrors?.content}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            name="_action"
            value="create_post"
            className="button-primary w-[7rem]"
          >
            Post  
          </button>  
        </div>
      </div>
    </Form>
  )
}

export default CreatePost