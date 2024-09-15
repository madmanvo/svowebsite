import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery')
  const images = fs.readdirSync(galleryDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file))
  return NextResponse.json(images)
}