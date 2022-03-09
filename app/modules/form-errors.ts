export const validateName = (name: string) => {
  if (!name) {
    return 'Name is required'
  } else if (typeof name !== "string" || name.length < 3) {
    return 'Name must be at least 3 characters long'
  }
}

export const validateTitle = (title: string) => {
  if (!title) {
    return 'Title is required'
  } else if (typeof title !== "string" || title.length < 3) {
    return 'Title must be at least 3 characters long'
  }
}

export const validateContent = (content: string) => {
  if (!content) {
    return 'Content is required'
  } else if (typeof content !== "string" || content.length < 5) {
    return 'Content must be at least 3 characters long'
  }
}