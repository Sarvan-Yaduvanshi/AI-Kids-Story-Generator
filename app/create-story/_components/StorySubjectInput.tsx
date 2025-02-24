import { Textarea } from '@heroui/input'
import React from 'react'

function StorySubjectInput() {
  return (
    <div>
      <label className='font-bold text-4xl text-primary'>1. Subject of the story</label>
      <Textarea
        placeholder='write the subject of the story which you want to generate'
        size='lg'
        classNames={{
            input:"resize-y min-h-[230px] text-2xl p-5"
        }}
        className='mt-3 max-w-lg'
      />
    </div>
  )
}

export default StorySubjectInput
