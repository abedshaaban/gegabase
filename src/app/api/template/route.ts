import { supabase } from '@/database/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const { data, error } = await supabase
    .from('templates')
    .select(`id, parent, body`)
    .eq('id', id)
    .single()

  return NextResponse.json({ data, error })
}
