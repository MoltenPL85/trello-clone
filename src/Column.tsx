import { CardContainer, ColumnContainer, ColumnTitle } from "./styles"

type ColumnProps = {
  text: string
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn Typescript</CardContainer>
      <CardContainer>Begin to use static typing</CardContainer>
    </ColumnContainer>
  )
}