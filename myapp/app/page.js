import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'


export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <CardList />
    </main>
  )
}
