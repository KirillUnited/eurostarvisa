'use client'
import { MoveLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function BackLink() {
    const router = useRouter()

    return (
      <button type="button" onClick={() => router.back()}>
        <MoveLeftIcon/>
      </button>
    )
}

export default BackLink