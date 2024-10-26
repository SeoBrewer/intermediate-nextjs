export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getAttendeesCountForDashboard } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const Home = async () => {
  const user = await getCurrentUser()
  const count = await getAttendeesCountForDashboard(user.id)
  const now = new Date().toISOString()

  return (
    <div className="w-full flex h-full justify-center items-center">
      <div>
        <h4 className="text-lg">Attendees (Updated)</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">{count}</h2>
        <p>Last updated: {now}</p>
      </div>
    </div>
  )
}

export default Home
