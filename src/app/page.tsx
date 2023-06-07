import FormLeads from '@/components/pages/homepage/FormLeads/FormLeads';
import GridInfoCubes from '@/components/pages/homepage/GridInfoCubes/GridInfoCubes';
import PrincipalBanner from '@/components/pages/homepage/PrincipalBanner/PrincipalBanner';

export default function Home() {
  return (
    <main>
      <PrincipalBanner />
      <GridInfoCubes />
      <FormLeads />
    </main>
  )
}
