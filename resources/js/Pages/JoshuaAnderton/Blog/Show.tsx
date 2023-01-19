import { useEffect, useState } from "preact/hooks"
import { Client } from "@notionhq/client"

// Initializing a client
const notion = new Client({
  auth: import.env.VITE_NOTION_API_TOKEN,
})

export default () => {

  const [page, setPage] = useState(null)

  useEffect(() => {

    const myPage = notion.databases.query({
      database_id: import.env.VITE_NOTION_DATABASE_ID,
      filter: {
        property: "Landmark",
        rich_text: {
          contains: "Bridge",
        },
      },
    })

  }, [])

  return (
    <div>Test</div>
  )
}