import HeaderBox from '@/components/header'
import TotalBalanceBox from '@/components/totalBalance'
import Image from 'next/image'

export default function Home() {
  const loggedIn = { firstName: 'Evar' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and transactions effectively"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}
