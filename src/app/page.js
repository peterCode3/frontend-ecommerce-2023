import Heading from '@/components/atoms/Heading/Heading'
import Button from '@/components/atoms/Button/Button'
import Input from '@/components/atoms/Input/Input'
import Label from '@/components/atoms/Label/Label'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import Span from '@/components/atoms/Span/Span'
import EventButton from '@/components/atoms/Button/EventButton'
import AnchorTag from '@/components/atoms/AnchorTag/AnchorTag'
import CheckBox from '@/components/atoms/CheckBox/CheckBox'
import Container from '@/components/atoms/Container/container'
export default function Home() {
  return (
    <div className='main'>
      <Container>
        <Heading level="1">Hello Khan</Heading>
        <Button href="#">Click Me</Button>
        <Input name="Text" placeholder="Full Name" type="text" />
        <Label>Hello</Label>
        <Paragraph>Hello Everyone</Paragraph>
        <Span>Hello Man</Span>
        <EventButton>Hy</EventButton>
        <AnchorTag href="#">Hello Tag</AnchorTag>
      </Container>
    </div>
  )
}
