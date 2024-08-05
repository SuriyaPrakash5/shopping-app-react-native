import {createClient} from "@sanity/client"
import { fetchQuery } from "./utils/supports"

const client = createClient({
    projectId:"m8nvcnyb",
    dataset:"production",
    apiVersion:"2024-07-29",
    useCdn:true
})

export const fetchFeeds = async ()=>{
    let data = await client.fetch(fetchQuery).then(feeds => {return feeds})
    return data
}

