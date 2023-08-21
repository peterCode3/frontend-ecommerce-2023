import Container from '@/components/atoms/Container/container'
import MainBannerSlider from '@/components/organism/MainBannerSlider'
import Header from '@/components/template/Header'
import Footer from '@/components/template/Footer'
import "@/../globals.css"
export default function Home() {

  const MainStyle = 'main overflow-hidden w-full';

  return (
    <div className={MainStyle}>
      <Header />
        <MainBannerSlider />
      <Container>

      </Container>
      <Footer />
    </div>
  )
}
