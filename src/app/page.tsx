import FAQs from '@/components/pages/homepage/FAQs/FAQs';
import FormLeads from '@/components/pages/homepage/FormLeads/FormLeads';
import GridInfoCubes from '@/components/pages/homepage/GridInfoCubes/GridInfoCubes';
import PrincipalBanner from '@/components/pages/homepage/PrincipalBanner/PrincipalBanner';
import About from '@/components/pages/homepage/about/About';

export default function Home() {
  return (
    <main>
      <PrincipalBanner />
      <GridInfoCubes />
      <About />
      <FAQs />
      <FormLeads />
    </main>
  )
}
