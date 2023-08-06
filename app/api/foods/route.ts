import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { id } = await request.json()

    
    const { data } = await supabase
        .from('Foods')
        .update({ fats: 0.1 })
        .match({ id })

    return NextResponse.json(data)
}

export async function DELETE(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { id } = await request.json()
    const { data } = await supabase.from('Foods').delete().match({ id })

    return NextResponse.json(data)
}